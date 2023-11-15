import { Link } from "react-router-dom";
import MoneyButton from "../../../feature/payment/MoneyButton";
import PurpleButton from "../../../feature/payment/PurpleButton";
import { useState } from "react";
import axios from "../../../config/axios";
import { useAuth } from "../../../feature/hook/use-auth";

export default function TopUpToAmoutPage() {
    const [navPoint, setNavPoint] = useState("");
    const [price, setPrice] = useState({ price: "" });

    const { isLoading, setIsLoading } = useAuth();

    const handleSubmitCheckout = async (e) => {
        try {
            e.preventDefault();
            isLoading;
            const res = await axios.post("/payment", price);
            window.location.replace(res.data.url);
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <form
            className="flex flex-col m-auto items-center justify-start  h-screen w-screen gap-2"
            onSubmit={(e) => handleSubmitCheckout(e)}
        >
            <div className=" flex flex-col pt-10 items-start w-full ">
                <span className="material-symbols-outlined text-Primary-dark  font-bold text-[32px] active:text-MonoColor-300 pl-4">
                    <Link to="/mywallet">navigate_before</Link>
                </span>
            </div>
            <div className="flex items-center">
                <p className="text-Primary-dark text-[24px] font-normal item-center">
                    Top-up to amount
                </p>
            </div>
            <div className="flex flex-col gap-4 pt-8">
                <p className="text-[18px] text-MonoColor-400 ">
                    Please choose amount
                </p>
                <div className=" flex w-[280px] h-[60px] bg-Primary-lightest justify-start items-center rounded-2xl">
                    <p className="pl-8 font-medium text-[20px] text-MonoColor-600">
                        {navPoint} NP
                    </p>
                </div>
            </div>
            <div className="pt-4">
                <MoneyButton setNavPoint={setNavPoint} setPrice={setPrice} navPoint={navPoint} />
            </div>
            <div className="pt-10">
                <PurpleButton type="submit" title="Next" />
            </div>
        </form>
    );
}
