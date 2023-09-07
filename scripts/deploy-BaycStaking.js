
const hre = require("hardhat");

async function main() {
  
  const BaycStaking = await hre.ethers.getContractFactory("BaycStaking");
  const baycstaking = await BaycStaking.deploy('0xe500F2CCCa2712374056033042Bdd3be5A81D6e8', '0x56cF3DBD6E005F709b89f51DB4cf2ED7195b0f87');

  await baycstaking.deployed();

  console.log("BaycStaking deployed to:", baycstaking.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });