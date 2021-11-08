const hre = require("hardhat");

async function main() {

    // We get the contract to deploy
    const NFTCaller = await hre.ethers.getContractFactory("NFTCaller");
    const nftCaller = await NFTCaller.deploy(
        "0x90B476c2C3fd68a55BdA1e0B6E764b16D4C29623",
        [
            "0xBCcC2073ADfC46421308f62cfD9868dF00D339a8",
            "0x6D9380cE03fB66Fb2674e5908DB67dA9Ed7B046D"
        ]);

    await nftCaller.deployed();

    console.log("NFTCaller deployed to:", nftCaller.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
