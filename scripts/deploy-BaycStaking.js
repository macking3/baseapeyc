
const hre = require("hardhat");

async function main() {
  
  const BaycStaking = await hre.ethers.getContractFactory("BaycStaking");
  const baycstaking = await BaycStaking.deploy('0xe500F2CCCa2712374056033042Bdd3be5A81D6e8', '0x9f2d12BBcF360A6195439476AB26ce4645252c95');

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