// const Web3 = require('web3');
// const web3 = new Web3('https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID');

// //! check the connection
// web3.eth.getBlockNumber().then(console.log); 
const Web3 = require('web3');
const web3 = new Web3('https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID');

web3.eth.getBlockNumber()
  .then(blockNumber => {
    console.log('Latest Block Number:', blockNumber);
  })
  .catch(error => {
    console.error('Error fetching block number:', error);
  });
