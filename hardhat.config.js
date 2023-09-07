require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
// eslint-disable-next-line no-undef
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.12",
  paths: {
    artifacts: './src/artifacts',
  },
  networks: {
    base: {
      url: 'https://developer-access-mainnet.base.org',
      accounts: ['2189aa89efb706207d21d00972636db9c92ffc46839aa86bf1aca2c1e9e8690d'],
      verify: {
         etherscan: {
           apiKey: {
            base: 'SCXTHHYAXJISC7EP9MJKP3HAM7TRBHEH5P'
           }
         }
      }      
    }
  }
};