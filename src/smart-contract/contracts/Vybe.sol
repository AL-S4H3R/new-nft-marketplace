// SPDX-License-Identifier: MIT
pragma solidity ^0.6.6;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@chainlink/contracts/src/v0.6/VRFConsumerBase.sol";

contract Vybe is ERC721, VRFConsumerBase {

    //token counter
    uint256 public tokenCounter;

    //vars required for VRF
    bytes32 internal keyHash;
    uint256 internal fee;
    uint256 public randomResult;

    address public vrfCoordinator;
    
    enum Category {
        VISIONARY,
        INGENIOUS,
        IMAGINATIVE
    }    

    mapping(bytes32 => address) public requestIdToSender;
    mapping(bytes32 => string) public requestIdToTokenURI;
    mapping(uint256 => Category) public tokenIdToCategory;
    mapping(bytes32 => uint256) public requestIdToTokenId;

    constructor(address _VRFCoordinator, address _LinkToken, bytes32 _keyHash) public
    VRFConsumerBase(_VRFCoordinator, _LinkToken)
    ERC721("VYBE", "VYB") {
        vrfCoordinator = _VRFCoordinator;
        keyHash = _keyHash;
        fee = 0.1 * 10**18; // 1 Link
    }

    function createCollectible(string memory _tokenURI, uint256 _userProvidedSeed)
        public returns(bytes32) 
    {
        bytes32 requestId = requestRandomness(keyHash, fee, _userProvidedSeed);
        requestIdToSender[requestId] = msg.sender;
        requestIdToTokenURI[requestId] = _tokenURI;
    }

    function fulfillRandomness(bytes32 _requestId, uint256 _randomNumber)
        internal override 
    {
        address nftOwner = requestIdToSender[_requestId];
        string memory tokenURI = requestIdToTokenURI[_requestId];
        uint256 newItemId = tokenCounter;
        _safeMint(msg.sender, newItemId);
        _setTokenURI(newItemId, tokenURI);
        Category cat = Category(_randomNumber % 3);
        tokenIdToCategory[newItemId] = cat;
    } 
}