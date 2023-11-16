import { useState } from "react";
import { createContext } from "react";
import axios from "../config/axios";
export const WalletContext = createContext();
export default function WalletContextProvider({ children }) {
  const [wallet, setWallet] = useState();
  const getWallet = () => {
    axios
      .get("/user")
      .then((res) => {
        setWallet({ wallet: res.data[0].wallet });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <WalletContext.Provider value={{ wallet, setWallet, getWallet }}>
      {children}
    </WalletContext.Provider>
  );
}
