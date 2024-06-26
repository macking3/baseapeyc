
const hre = require("hardhat");

async function main() {
  
  const BaseApeToken = await hre.ethers.getContractFactory("BaseApeToken");
  const baseapetoken = await BaseApeToken.deploy();

  await baseapetoken.deployed();

  console.log("BaseApeToken deployed to:", baseapetoken.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });