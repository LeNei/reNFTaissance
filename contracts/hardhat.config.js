require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

// Go to https://infura.io, sign up, create a new API key
// in its dashboard, and replace "KEY" with it
const INFURA_API_KEY = process.env.INFURA_API_KEY;

// Replace this private key with your Sepolia account private key
// To export your private key from Coinbase Wallet, go to
// Settings > Developer Settings > Show private key
// To export your private key from Metamask, open Metamask and
// go to Account Details > Export Private Key
// Beware: NEVER put real Ether into testing accounts
const SEPOLIA_PRIVATE_KEY = process.env.SEPOLIA_PRIVATE_KEY;

module.exports = {
  solidity: "0.8.19",
  networks: {
    sepolia: {
      url: `https://sepolia.infura.io/v3/${INFURA_API_KEY}`,
      accounts: [SEPOLIA_PRIVATE_KEY]
    },

    alfajores: {
      url: "https://alfajores-forno.celo-testnet.org",
      accounts: [SEPOLIA_PRIVATE_KEY],
      chainId: 44787
    },
    neonevm: {
      url: "https://devnet.neonscan.org",
      accounts: [SEPOLIA_PRIVATE_KEY],
      chainId: 245022926,
    },
  }
};
