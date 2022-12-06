/** @type import('hardhat/config').HardhatUserConfig */
require("@nomiclabs/hardhat-ethers");
const WALLET_PRIVATE_KEY = process.env.WALLET_PRIVATE_KEY
const accounts = [WALLET_PRIVATE_KEY]

module.exports = {
  solidity: "0.8.17",
  networks: {
    'arbitrum-goerli': {
      url:
        process.env.JSONRPC_HTTP_URL || 'https://goerli-rollup.arbitrum.io/rpc',
      accounts,
    },
  }
};
