// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import {Client} from "@chainlink/contracts-ccip/src/v0.8/ccip/libraries/Client.sol";
import {CCIPReceiver} from "@chainlink/contracts-ccip/src/v0.8/ccip/applications/CCIPReceiver.sol";
import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import {IStake} from "./interfaces/IStake.sol";

contract DestChainReceiver is CCIPReceiver {
    address stake;

    constructor(address router, address _stake) CCIPReceiver(router) {
        stake = _stake;
    }

    function _ccipReceive(
        Client.Any2EVMMessage memory any2EvmMessage
    ) internal override {
        IERC20(any2EvmMessage.destTokenAmounts[0].token).approve(
            stake,
            any2EvmMessage.destTokenAmounts[0].amount
        );

        IStake(stake).stake(
            any2EvmMessage.destTokenAmounts[0].amount,
            abi.decode(any2EvmMessage.data, (address))
        );
    }
}
