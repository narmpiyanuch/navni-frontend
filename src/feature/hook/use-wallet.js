import React from 'react'
import { useContext } from 'react'
import { WalletContext } from '../../context/walletContext'

export default function useWallet() {
  return (
    useContext(WalletContext)
  )
}
