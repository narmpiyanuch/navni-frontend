import { useEffect } from "react";

import purpleLogoNB from "../../../assets/purpleLogoNonbackground.png";
// import bathIconGreen from "../../../assets/bathicongreen.png";
import PurpleButton from "../../../feature/payment/PurpleButton";
import axios from "../../../config/axios";
import { Link } from "react-router-dom";

export default function TopUpSuccess() {
    useEffect(() => {
        const query = new URLSearchParams(window.location.search);
        const transactionId = query.get("transactionId");

        const createTransactionPayment = async (transactionId) => {
            try {
                await axios.post(`/payment/${transactionId}`);
            } catch (error) {
                console.log(error);
            }
        };

        if (query.get("success")) {
            createTransactionPayment(transactionId);
        }
    }, []);

    return (
        <div>
            <div className="flex flex-col m-auto items-center justify-center  h-screen w-screen gap-2">
                <div className="flex flex-col items-center gap-10">
                    <span className="material-symbols-outlined text-MonoColor-50 text-[32px] bg-OtherColor-lightGreen rounded-full p-2">
                        check
                    </span>
                    <p className="text-[24px] text-OtherColor-lightGreen font-semibold">
                        Top-up successful
                    </p>
                </div>
                <img src={purpleLogoNB} alt="logo" className="w-[180px]" />
                {/* <div className="flex items-center">
                    <p className="text-[36px] text-OtherColor-lightGreen font-semibold">
                        100
                    </p>
                    <img
                        src={bathIconGreen}
                        alt="bathiconGeen"
                        className="w-[44px]"
                    />
                </div> */}
                {/* <p className="text-[24px] text-OtherColor-lightGreen font-semibold">
                    is added
                </p> */}
                <div className="pt-8">
                    <Link to="/home">
                        <PurpleButton title="Back to Home" />
                    </Link>
                </div>
            </div>
        </div>
    );
}
