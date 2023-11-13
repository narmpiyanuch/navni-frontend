import calendar from "../../../assets/calendar.png";
import { Link } from "react-router-dom";

export default function DriverHistory() {
    return (
        <button className="flex flex-col justify-center items-center relative w-[320px] h-[80px] rounded-3xl bg-Primary-light active:bg-Primary-main">
            <Link to="/servicehistory" className="flex justify-center">
                <div className="flex justify-center items-center w-[64px] h-[64px] bg-MonoColor-50 rounded-full absolute top-[-30px]  border-4 border-Primary-light">
                    <img src={calendar} alt="tuktuk" className="w-[40px]" />
                </div>
                <p className="text-MonoColor-50 text-[20px] font-semibold pt-4">
                    History
                </p>
            </Link>
        </button>
    );
}
