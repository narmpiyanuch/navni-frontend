import { useNavigate } from "react-router-dom";
import useBooking from "../feature/hook/use-booking";
import ModalSuccess from "./ModalSuccess";
import { useState } from "react";
import { createAlert, createErrorSweetAlert } from "../utils/sweetAlert";
import socket from "../config/socket";

export default function ModalCancelTrip({ onClose, open, to, bookingWait }) {
  const [isCancel, setIsCancel] = useState(false);

  const navigate = useNavigate();
  const { userCancelBooking, userItem } = useBooking();

  // console.log(bookingWait);
  const handdleUserCancelTrip = async (e) => {
    try {
      e.preventDefault();

      const data = await userCancelBooking({
        id: userItem[0].id,
      });

      socket.emit("cancel_requestBooking");

      if (!data) {
        createErrorSweetAlert("ERROR", "Can't cancel booking");
        onClose();
        return;
      }
      createAlert("Cancel Success");
      navigate("/home");
    } catch (error) {
      console.log(error);
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
                <div className="flex justify-center text-center  py-12 px-10">
                  <p className="text-[24px] font-semibold text-Primary-darker ">
                    Do you want to cancel this trip?
                  </p>
                </div>
                <div className="flex gap-4">
                  <button
                    className="text-[16px] text-Primary-darker border-2 border-Primary-darker rounded-lg w-[80px] h-[32px] active:bg-Primary-darker active:text-MonoColor-50"
                    onClick={onClose}
                  >
                    Stay
                  </button>
                  <button
                    className="text-[16px] text-Error-pressed border-2 border-Error-pressed rounded-lg w-[120px] h-[32px] active:bg-Error-pressed active:text-MonoColor-50"
                    onClick={(e) => handdleUserCancelTrip(e)}
                  >
                    Confirm Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
          <ModalSuccess
            to={to}
            open={isCancel}
            onClose={() => setIsCancel(false)}
          />
        </>
      )}
    </>
  );
}
