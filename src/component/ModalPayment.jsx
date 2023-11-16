// import { useEffect } from "react";
// import { useState } from "react";
// import axios from "../config/axios";
// import { useAuth } from "../feature/hook/use-auth";
import useMap from "../feature/hook/use-map";
import useBooking from "../feature/hook/use-booking";
import { useNavigate } from "react-router-dom";
import useWallet from "../feature/hook/use-wallet";
import { createErrorSweetAlert } from "../utils/sweetAlert";

export default function ModalPayment({ open, onClose, totalPrice, passenger }) {
  const { creatBookingForUser } = useBooking();
  const navigate = useNavigate();
  const { pickup, drop } = useMap();
  const { wallet } = useWallet();

  const handleCreateBooking = async (e) => {
    try {
      e.preventDefault();
      const bookItem = await creatBookingForUser(
        pickup.id,
        drop.id,
        passenger,
        totalPrice.price
      );
      console.log(bookItem);

      navigate("/waitingtaxi");
    } catch (error) {
      createErrorSweetAlert(
        "Error",
        "Can't Book this trip you have trip on booking"
      );
    }
  };

  return (
    <>
      {open && (
        <>
          <div className=" fixed inset-0 bg-MonoColor-900 opacity-50 z-20"></div>
          <div className=" fixed inset-0 z-30 ">
            <div className="flex justify-center items-center min-h-full">
              <div className="flex flex-col items-center justify-start h-[320px] w-[280px] bg-MonoColor-50 rounded-3xl gap-4">
                <div className="flex flex-col items-end pr-8 w-full pt-6">
                  <span
                    className="material-symbols-outlined text-MonoColor-400  hover:cursor-pointer"
                    onClick={onClose}
                  >
                    close
                  </span>
                </div>
                <div className="flex w-full pl-8">
                  <p className="text-[18px] font-semibold text-MonoColor-400">
                    Payment
                  </p>
                </div>
                <div className="flex gap-4 p-2">
                  <div className="flex flex-col items-center justify-center gap-4 bg-Primary-main w-[180px] h-[96px] rounded-2xl">
                    <div className="flex flex-col justify-center items-center">
                      {/* <p className="text-[12px] text-MonoColor-50 ">My wallet</p> */}
                      <p className="text-[24px] text-MonoColor-50 font-semibold">
                        {" "}
                        {totalPrice && totalPrice.price} NP
                      </p>
                      <p className="text-[12px] text-MonoColor-50">
                        Balance {wallet && wallet.wallet} NP
                      </p>
                    </div>
                  </div>
                </div>
                <button
                  onClick={(e) => handleCreateBooking(e)}
                  className="bg-Primary-dark rounded-3xl text-MonoColor-50 py-2 px-4 text-[16px] font-normal  active:text-MonoColor-600 active:bg-Primary-light"
                >
                  Request a car
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
