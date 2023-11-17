import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import TopUpByQR from "../../feature/auth/TopUpByQR";
import WalletButton from "../../feature/payment/WalletButton";
import axios from "../../config/axios";

export default function MyWalletPage() {
  const [history, setHistory] = useState(null);

  const fetchHistory = async () => {
    try {
      const result = await axios.get("/user/wallet");
      return setHistory(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(history);

  useEffect(() => {
    fetchHistory();
  }, []);

  return (
    <div className="flex flex-col items-center w-screen h-full">
      <div className="flex flex-col w-full sticky top-0 left-0 right-0 bg-MonoColor-100">
        <div className="flex items-start pt-10">
          <Link to="/home">
            <span className="material-symbols-outlined text-Primary-dark font-bold text-[32px] active:text-MonoColor-300 pl-4">
              navigate_before
            </span>
          </Link>
        </div>
        <div className="flex items-center justify-center">
          <p className="text-Primary-dark text-[24px] font-normal">My Wallet</p>
        </div>

        <div className="p-5">
          <p className="text-[18px] text-MonoColor-600">Current balance</p>
        </div>

        <Link to="/topup">
          <WalletButton key={history?.id}>
            {history ? `${history.amount} NP` : ` 0 NP`}
          </WalletButton>
        </Link>

        <div className="p-5">
          <p className="text-[18px] text-MonoColor-600 w-[330px]">
            My Wallet History
          </p>
        </div>
      </div>
      <div>
        <TopUpByQR key={history?.id} history={history} />
      </div>
    </div>
  );
}
