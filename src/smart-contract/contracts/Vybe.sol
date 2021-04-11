// SPDX-License-Identifier: MIT
pragma solidity ^0.6.6;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "";

contract Vybe is ERC721 {
    bytes32 public keyHash;
    uint256 public fee;
    uint256 public randomResult;

}