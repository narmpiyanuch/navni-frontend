import { useEffect } from "react";
import OrderCustumerOne from "./OrderCustumerOne";
import socket from "../../config/socket";

export default function OrderForDriver({
  setIsAccept,
  onClose,
  setIsOpen,
  bookingItem,
}) {
  return (
    <>
      <div className="flex flex-col gap-2 fixed items-center justify-start bottom-0 w-full max-h-[40vh] overflow-auto">
        {bookingItem?.map((el) => {
          return (
            <OrderCustumerOne
              setIsAccept={setIsAccept}
              onClose={onClose}
              setIsOpen={setIsOpen}
              el={el}
              key={el.id}
            />
          );
        })}
      </div>
    </>
  );
}
