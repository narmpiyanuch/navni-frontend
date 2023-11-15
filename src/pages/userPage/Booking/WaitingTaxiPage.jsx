import { useNavigate } from "react-router-dom";
import logoBGpurple from "../../../assets/logoBGpurple.jpg";
import ModalCancelTrip from "../../../component/ModalCancelTrip";
import { useState } from "react";
import Map from "../../../feature/googlemap/Map";
import useMap from "../../../feature/hook/use-map";
import useBooking from "../../../feature/hook/use-booking";

export default function WaitingTaxiPage() {
    const [isOpen, setIsOpen] = useState(false);
    const [isCancel, setIsCancel] = useState(false);
    const { pickup, drop } = useMap();

    const { bookingWait } = useBooking();

    return (
        <div className=" flex flex-col m-auto items-center justify-center bg-MonoColor-50 h-screen w-screen gap-2">
            <div className="relative h-full  w-full  bg-Primary-light">
                <div className="flex absolute top-0 left-0 p-5">
                    <img
                        src={logoBGpurple}
                        alt="logo"
                        className="z-40 rounded-full w-[80px] border-4 border-MonoColor-50 active:border-Primary-main hover:cursor-pointer"
                    />
                </div>
                <Map />
            </div>
            <div className="fixed top-[60%] items-center justify-start pt-6 bg-MonoColor-50 h-full w-screen">
                <div className="flex items-center justify-center h-[120px] bg-MonoColor-50 drop-shadow-md gap-2">
                    <div className="flex flex-col relative pr-8">
                        <div className="absolute outline-none top-[-32px] left-[10px] w-[20px] h-[20px] border-4 border-Primary-dark bg-MonoColor-50 rounded-full z-10"></div>
                        <hr className="absolute border-2 border-Primary-dark w-[40px] rotate-90" />
                        <div className="absolute outline-none top-[12px] left-[10px] w-[20px] h-[20px] border-4 border-Primary-dark bg-Primary-dark rounded-full"></div>
                    </div>
                    <div className="flex flex-col items-start justify-center  w-[240px] h-[100px]  gap-6">
                        <div className="flex gap-4">
                            <p className="text-[16px] flex font-semibold text-MonoColor-400 bg-transparent">
                                From
                            </p>
                            <p className="text-[16px] flex font-semibold bg-transparent text-MonoColor-700 ">
                                {bookingWait && bookingWait.pickup.stationName}
                            </p>
                        </div>
                        <div className="flex gap-4">
                            <p className="text-[16px] flex font-semibold text-MonoColor-400 bg-transparent">
                                To
                            </p>
                            <p className="text-[16px] flex font-semibold bg-transparent text-MonoColor-700 ">
                                {bookingWait && bookingWait?.drop?.stationName}
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col items-start justify-center gap-6 pr-2">
                        <div className="flex flex-col justify-center items-center gap-4">
                            <p className="text-[16px] flex font-semibold text-MonoColor-400 bg-transparent">
                                Fare
                            </p>
                            <p className="text-[16px] flex font-semibold bg-transparent text-Primary-dark ">
                                {bookingWait?.booking?.price} NP
                            </p>
                        </div>
                    </div>
                </div>
                <div className=" flex items-center justify-center h-[120px] bg-MonoColor-50 ">
                    <div className="grid grid-cols-3 justify-center items-center gap-6">
                        <div className="flex flex-col gap-2 justify-center items-center pt-6">
                            <p className="text-[16px] flex font-semibold text-MonoColor-400 bg-transparent">
                                Car No.
                            </p>
                            <p className="text-[16px] flex text-center font-semibold bg-transparent text-MonoColor-700 ">
                                {bookingWait?.booking?.carinformationId
                                    ? bookingWait?.booking?.carinformationId
                                    : "waiting for driver.."}
                            </p>
                        </div>
                        <div className="flex flex-col gap-2 justify-center items-center">
                            <p className="text-[16px] flex font-semibold text-MonoColor-400 bg-transparent">
                                Arriving in
                            </p>
                            <p className="text-[16px] flex font-semibold bg-transparent text-MonoColor-700 ">
                                5-10 mins
                            </p>
                        </div>
                        <div className="flex flex-col gap-2 justify-center items-center">
                            {isOpen ? (
                                <button className="w-[100px] h-[32px] bg-OtherColor-darkGreen text-MonoColor-50 rounded-xl text-[14px] active:bg-OtherColor-lightGreen active:text-MonoColor-700">
                                    On the way
                                </button>
                            ) : (
                                <button
                                    className="w-[100px] h-[32px] bg-Error-hover text-MonoColor-50 rounded-xl text-[14px] active:bg-red-500 active:text-MonoColor-700"
                                    onClick={() => setIsCancel(true)}
                                >
                                    Cancel
                                </button>
                            )}
                            {/* (รอแก้อีกที) */}
                        </div>
                    </div>
                </div>
            </div>
            <ModalCancelTrip
                to="/"
                open={isCancel}
                onClose={() => setIsCancel(false)}
                bookingWait={bookingWait}
            />
        </div>
    );
}
