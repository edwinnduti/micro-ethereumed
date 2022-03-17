// SPDX-License-Identifier: MIT

pragma solidity ^0.8.4;

import "hardhat/console.sol";

contract LikePortal  {
    uint256 totalLikes;
    address liker = msg.sender;

    constructor(){
        console.log("Yo yo,  I am a contract and I am smart");
    }

    function like() public {
        totalLikes+=1;
        console.log("%s likes it!", liker);
    }

    function getTotalLikes() public payable returns (uint256){
        console.log("Total likes: %s", totalLikes);
        return totalLikes;
    }
}