const {ethers, upgrades} = require("hardhat");

async function main() {
    const TestNFT = await ethers.getContractFactory("TestNFT");
    const testNFT = await TestNFT.deploy();
    await testNFT.deployed();
    console.log("TestNFT deployed to:", testNFT.address);
}

main();