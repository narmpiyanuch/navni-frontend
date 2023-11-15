import tuktuk from "../../../assets/tuktuk.png";

import { Link } from "react-router-dom";

import DriverHistory from "./DriverHistory";

export default function StartDrive() {
    return (
        <div className="flex  flex-col items-center justify-center pt-12 gap-10">
            <button className="flex flex-col justify-center items-center relative w-[320px] h-[80px] rounded-3xl bg-Primary-light active:bg-Primary-main">
                <Link to="/startdrive" className="flex justify-center">
                    <div className="flex justify-center items-center w-[64px] h-[64px] bg-MonoColor-50 rounded-full absolute top-[-30px]  border-4 border-Primary-light">
                        <img src={tuktuk} alt="tuktuk" className="w-[40px]" />
                    </div>
                    <p className="text-MonoColor-50 text-[20px] font-semibold pt-4">
                        Start to drive
                    </p>
                </Link>
            </button>
            <DriverHistory />
        </div>
    );
}
