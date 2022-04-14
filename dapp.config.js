const FORTMATIC_KEY = process.env.NEXT_PUBLIC_FORTMATIC_KEY
const RPC_URL = process.env.NEXT_PUBLIC_ALCHEMY_RPC_URL


const config = {
    title: 'Fish Dapp',
    description: 'Fish Dapp Desc',
    contractAddress: '0x19A9a0930e71cCA09999FC78591b41de2Db41d11',
    maxMintAmount: 10,
    presaleMaxMintAmount: 3,
    price: 0.01
  }

  const onboardOptions = {
    dappId: process.env.NEXT_PUBLIC_DAPP_ID,
    networkId: 4, // Rinkeby
    darkMode: true,
    walletSelect: {
      wallets: [
        { walletName: 'metamask', preferred: true },
        { walletName: 'coinbase', preferred: true },
        {
          walletName: 'walletLink',
          preferred: true,
          rpcUrl: RPC_URL,
          appName: 'BoredApe Dapp'
        },
        {
          walletName: 'fortmatic',
          apiKey: FORTMATIC_KEY,
          preferred: true
        },
        { walletName: 'trust', preferred: true, rpcUrl: RPC_URL },
        { walletName: 'gnosis', preferred: true },
        { walletName: 'authereum' },
  
        {
          walletName: 'ledger',
          rpcUrl: RPC_URL
        },
        {
          walletName: 'lattice',
          rpcUrl: RPC_URL,
          appName: 'BoredApe Dapp'
        },
        {
          walletName: 'keepkey',
          rpcUrl: RPC_URL
        }
      ]
    },
    walletCheck: [
      { checkName: 'derivationPath' },
      { checkName: 'accounts' },
      { checkName: 'connect' },
      { checkName: 'network' }
    ]
  }
  
  export { config, onboardOptions }