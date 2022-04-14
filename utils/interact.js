const { createAlchemyWeb3 } = require('@alch/alchemy-web3')
const { MerkleTree } = require('merkletreejs')
const keccak256 = require('keccak256')
const whitelist = require('../scripts/whitelist.js')

const web3 = createAlchemyWeb3("https://eth-rinkeby.alchemyapi.io/v2/gV64A-nz56myywMUJG1Usa5qfdRwPPn5")
const { config } = require("../dapp.config");


const contract = require('../artifacts/contracts/Fish.sol/Fish.json')
const nftContract = new web3.eth.Contract(contract.abi, config.contractAddress)



// Calculate merkle root from the whitelist array
const leafNodes = whitelist.map((addr) => keccak256(addr))
const merkleTree = new MerkleTree(leafNodes, keccak256, { sortPairs: true })
const root = merkleTree.getRoot()

export const getTotalMinted = async () => {
    const totalMinted = await nftContract.methods.totalSupply().call()
    return totalMinted
  }

export const getMaxSupply = async () => {
    const maxSupply = await nftContract.methods.maxSupply().call()
    return maxSupply
  }

export const isPreSaleState = async () => {
    const preSale = await nftContract.methods.presaleM().call()
    return preSale
}

