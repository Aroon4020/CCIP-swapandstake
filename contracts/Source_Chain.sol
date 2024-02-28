// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import {IRouterClient} from "@chainlink/contracts-ccip/src/v0.8/ccip/interfaces/IRouterClient.sol";
import {Client} from "@chainlink/contracts-ccip/src/v0.8/ccip/libraries/Client.sol";
import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import {SafeERC20} from "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import {ReentrancyGuard} from "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import {ISwapRouter} from "./interfaces/ISwapRouter.sol";
import {IWMATIC} from "./interfaces/IWMATIC.sol";

contract SourceChainSender is ReentrancyGuard {
    using SafeERC20 for IERC20;
    IRouterClient immutable router;
    IERC20 immutable linkToken;
    ISwapRouter immutable swapRouter;
    address immutable USDT;
    address immutable WMATIC;

    event MessageSent(
        bytes32 indexed messageId,
        uint64 indexed destinationChainSelector,
        address receiver,
        address feeToken,
        uint256 fees,
        address to,
        uint256 amount
    );

    constructor(
        address _router,
        address _link,
        address _swapRouter,
        address _wmatic,
        address _usdt
    ) {
        router = IRouterClient(_router);
        linkToken = IERC20(_link);
        swapRouter = ISwapRouter(_swapRouter);
        WMATIC = _wmatic;
        USDT = _usdt;
    }

    receive() external payable {}

    function swapAndStake(
        uint256 amountIn,
        uint256 amountOutMin,
        uint64 destinationChainSelector,
        address receiver,
        uint256 gasLimit
    ) external payable returns (bytes32 messageId) {
        require(amountIn > 0, "Zero Amount");
        //transfer matic and convert to wrapped matic
        _pay(WMATIC, amountIn);
        IERC20(WMATIC).safeApprove(address(swapRouter), amountIn);
        //swap matic to USDT using quickswap v3
        uint256 amountOut = _swap(amountIn, amountOutMin);

        //create object for amount to bridge
        Client.EVMTokenAmount[]
            memory tokenAmounts = new Client.EVMTokenAmount[](1);
        Client.EVMTokenAmount memory tokenAmount = Client.EVMTokenAmount({
            token: USDT,
            amount: amountOut
        });
        tokenAmounts[0] = tokenAmount;

        //create message
        Client.EVM2AnyMessage memory evm2AnyMessage = Client.EVM2AnyMessage({
            receiver: abi.encode(receiver),
            data: abi.encode(msg.sender),
            tokenAmounts: tokenAmounts,
            extraArgs: Client._argsToBytes(
                Client.EVMExtraArgsV1({gasLimit: gasLimit})
            ),
            feeToken: address(linkToken)
        });

        uint256 fees = router.getFee(destinationChainSelector, evm2AnyMessage);
        if (fees > linkToken.balanceOf(address(this))) {
            revert("Not enough balance");
        }
        //approve router to use link
        linkToken.approve(address(router), fees);
        //approve router to use USDT
        IERC20(USDT).safeApprove(address(router), amountOut);

        messageId = router.ccipSend(destinationChainSelector, evm2AnyMessage);

        emit MessageSent(
            messageId,
            destinationChainSelector,
            receiver,
            address(linkToken),
            fees,
            msg.sender,
            amountOut
        );

        return messageId;
    }

    function _swap(
        uint256 amountIn,
        uint256 amountOutMin
    ) internal returns (uint256) {
        ISwapRouter.ExactInputSingleParams memory params = ISwapRouter
            .ExactInputSingleParams({
                tokenIn: WMATIC,
                tokenOut: USDT,
                recipient: address(this),
                deadline: block.timestamp,
                amountIn: amountIn,
                amountOutMinimum: amountOutMin,
                limitSqrtPrice: 0
            });
        return swapRouter.exactInputSingle(params);
    }

    function _pay(address _token, uint256 _amount) internal {
        if (_token == WMATIC && msg.value > 0) {
            require(msg.value == _amount);
            IWMATIC(_token).deposit{value: _amount}();
        } else {
            IERC20(_token).safeTransferFrom(msg.sender, address(this), _amount);
        }
    }
}
