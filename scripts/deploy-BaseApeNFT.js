
const hre = require("hardhat");

async function main() {
  
  const BaseApeNFT = await hre.ethers.getContractFactory("BaseApeNFT");
  const baseapenft = await BaseApeNFT.deploy(["0xA23dF46a1493dff5e325a3113229C70bd39dfEAD"], [100], "ipfs/bafybeig32rjd4burz53ylsyy7laked6sdfkstwo2fsvdgdbx6ogvneaium/");

  await baseapenft.deployed();

  console.log("BaseApeNFT deployed to:", baseapenft.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error); 
    process.exit(1);
  });