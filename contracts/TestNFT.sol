pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract TestNFT is ERC721 {
    string internal tokenURI_ = "https://opensea-creatures-api.herokuapp.com/api/creature/3";
    uint256 public currentTokenID;

    constructor() public ERC721('Wonderful Girl', 'WG'){

    }

    function mint(uint256 amount) public {
        require(amount < 50);
        for (uint256 i; i < amount; i++) {
            _mint(msg.sender, currentTokenID);
            currentTokenID = currentTokenID + 1;
        }
    }

    function tokenURI(uint256 tokenId) public view override returns (string memory){
        return tokenURI_;
    }

    function setTokenURI(string memory tURI) public {
        tokenURI_ = tURI;
    }
}
