const HDWalletProvider = require('truffle-hdwallet-provider');
const infuraKey = "2c39affa373243a8acb74f3a0c0c7731";
const mnemonic = "number maid remain party need hat aerobic video surround word math journey"

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      gas: 10000000,        // rinkeby has a lower block limit than mainnet
      gasPrice: 20000000000,
      network_id: "*" // Match any network id
    },
    rinkeby: {
      provider: () => new HDWalletProvider(mnemonic, `https://rinkeby.infura.io/v3/${infuraKey}`),
        network_id: 4,       // rinkeby's id
        gas: 10000000,        // rinkeby has a lower block limit than mainnet
        gasPrice: 10000000000
    },
  }
};