import { useState, useEffect } from 'react'
import { initOnboard } from '../utils/onboard'
import { config } from '../dapp.config'

import {
    getTotalMinted,
    getMaxSupply,
    isPreSaleState
  } from '../utils/interact'



export default function Mint() {

    const [maxSupply, setMaxSupply] = useState(0)
    const [totalMinted, setTotalMinted] = useState(0)
    const [isPreSale, setIsPreSale] = useState(false)
    const [onboard, setOnboard] = useState(null)
    const [walletAddress, setWalletAddress] = useState('')

    useEffect(() => {
        const init = async () => {
            setMaxSupply(await getMaxSupply())
            setTotalMinted(await getTotalMinted())
            const isPreSale = await isPreSaleState()
            setIsPreSale(isPreSale)
        }
        init()

    },[])

    useEffect(() => {
        const onboardData = initOnboard({
          address: (address) => setWalletAddress(address ? address : ''),
          wallet: (wallet) => {
            if (wallet.provider) {
              window.localStorage.setItem('selectedWallet', wallet.name)
            } else {
              window.localStorage.removeItem('selectedWallet')
            }
          }
        })
    
        setOnboard(onboardData)
      }, [])

      const connectWalletHandler = async () => {
        const walletSelected = await onboard.walletSelect()
        if (walletSelected) {
          await onboard.walletCheck()
          window.location.reload(true)
        }
      }

    return(
        <div>
        <h1>{maxSupply}</h1>
        <h1>{totalMinted}</h1>
        <h1>{walletAddress}</h1>
        <button  onClick={connectWalletHandler}> Connect Wallet</button>
        </div>
    );

}