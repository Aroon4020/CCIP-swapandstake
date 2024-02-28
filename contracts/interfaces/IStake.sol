// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

interface IStake {
    function stake(uint256 amount, address onBehalfOf) external;
    function unstake(uint256 amount) external; 
}