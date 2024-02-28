// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import {ReentrancyGuard} from "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import {SafeERC20} from "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import {IStake} from "./interfaces/IStake.sol";

contract Stake is IStake, ReentrancyGuard {
    using SafeERC20 for IERC20;
    mapping(address owner => uint256 amount) public stakes;
    IERC20 stakingToken;

    constructor(address stakingTokenAddress) {
        stakingToken = IERC20(stakingTokenAddress);
    }

    function stake(
        uint256 amount,
        address onBehalfOf
    ) external override nonReentrant {
        stakingToken.safeTransferFrom(msg.sender, address(this), amount);
        stakes[onBehalfOf] += amount;
    }

    function unstake(uint256 amount) external override nonReentrant {
        if (amount > stakes[msg.sender]) revert();
        stakes[msg.sender] -= amount;
        stakingToken.safeTransfer(msg.sender, amount);
    }
}
