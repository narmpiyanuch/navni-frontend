import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "../../config/axios";
import HistoryForm from "../../feature/taxi/HistoryForm";

export default function ServiceHistory() {
    const [services, setService] = useState();

    const fetchService = async () => {
        try {
            const result = await axios.get("/booking/service-history");
            console.log(result.data.booking);
            setService(result.data.booking);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchService();
    }, []);

    return (
        <div>
            <div className=" flex flex-col items-center justify-start gap-2 h-screen">
                <div className="flex flex-col w-full sticky top-0 left-0 right-0 bg-MonoColor-100">
                    <div className=" flex flex-col pt-10 items-start w-full">
                        <Link to="/home">
                            <span className="material-symbols-outlined text-Primary-dark font-bold text-[32px] active:text-MonoColor-300 pl-4">
                                navigate_before
                            </span>
                        </Link>
                    </div>
                    <div className="flex items-center justify-center">
                        <p className="text-Primary-dark text-[24px] font-normal">
                            History
                        </p>
                    </div>
                </div>
                <hr className="border border-MonoColor-300 w-full mt-4" />
                <HistoryForm key={services?.id} services={services} />
            </div>
        </div>
    );
}
