const { ethers, upgrades } = require('hardhat');

async function main () {
    const FixedPriceNFT = await ethers.getContractFactory('FixedPriceNFT');
    console.log('Upgrading FixedPriceNFT...');
    await upgrades.upgradeProxy('0x051fe144fDA181b5593e4A36327f6d258C528116', FixedPriceNFT);
    console.log('FixedPriceNFT upgraded');
}

main();