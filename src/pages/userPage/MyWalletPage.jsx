import { Link } from "react-router-dom";
import TopUpByQR from "../../feature/auth/TopUpByQR";
import WalletButton from "../../feature/payment/WalletButton";

export default function MyWalletPage() {
    return (
        <div className="flex flex-col items-center">

            <div className="flex pt-10 items-start w-full">
                <Link to='/'>
                    <span className="material-symbols-outlined text-Primary-dark  font-bold text-[32px] active:text-MonoColor-300 pl-4"> navigate_before</span>
                </Link>
            </div>

            <div className="">
                <p className="text-Primary-dark text-[24px] font-normal item-center">My Wallet</p>
            </div>

            <div className="pt-8">
                <p className="text-[18px] text-MonoColor-400">Current balance</p>
            </div>

            <WalletButton title='100 NP +' />

            <div className="pt-10">
                <p className="text-[18px] text-MonoColor-400">My Wallet History</p>
            </div>

            <TopUpByQR />

        </div>
    )
}