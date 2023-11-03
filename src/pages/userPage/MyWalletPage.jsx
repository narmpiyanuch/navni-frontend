import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import TopUpByQR from "../../feature/auth/TopUpByQR";
import WalletButton from "../../feature/payment/WalletButton";
import axios from "../../config/axios";

export default function MyWalletPage() {
  const [history, setHistory] = useState();

  const fetchHistory = async () => {
    try {
      const result = await axios.get("/user/wallet");
      console.log("result", result.data);
      setHistory(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchHistory();
  }, []);

  return (
    <div className="flex flex-col items-center">
      <div className="flex pt-10 items-start w-full">
        <Link to="/home">
          <span className="material-symbols-outlined text-Primary-dark  font-bold text-[32px] active:text-MonoColor-300 pl-4">
            navigate_before
          </span>
        </Link>
      </div>

      <div className="">
        <p className="text-Primary-dark text-[24px] font-normal item-center">
          My Wallet
        </p>
      </div>

      <div className="pt-8">
        <p className="text-[18px] text-MonoColor-400">Current balance</p>
      </div>

      <Link to="/topupmywallet">
        <WalletButton key={history?.id} title={`${history?.amount} NP +`} />
      </Link>

      <div className="pt-10">
        <p className="text-[18px] text-MonoColor-400">My Wallet History</p>
      </div>

      <TopUpByQR key={history?.id} history={history} />
    </div>
  );
}
