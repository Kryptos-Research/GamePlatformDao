const {ethers, upgrades} = require("hardhat");

async function main() {
    const FixedPriceNFT = await ethers.getContractFactory("FixedPriceNFT");
    const fixedPriceNFT = await upgrades.deployProxy(FixedPriceNFT,
        ["0xBCcC2073ADfC46421308f62cfD9868dF00D339a8","0xBCcC2073ADfC46421308f62cfD9868dF00D339a8"],
        {initializer: 'initialize'});
    await fixedPriceNFT.deployed();
    console.log("FixedPriceNFT deployed to:", fixedPriceNFT.address);
}

main();