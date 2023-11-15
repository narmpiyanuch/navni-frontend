// import { useState } from "react";
import { useEffect } from "react";
import ComingToCustomerSmall from "./ComingToCustomerSmall";
import useDriver from "../hook/use-driver";
// import ComingtoCustomerExpand from "./ComingToCustomerExpand";

export default function ComingToCustomer({ setIsPickUp, open }) {
  const { getAcceptBookingItemForDriver, bookingComingItem } = useDriver();

  useEffect(() => {
    getAcceptBookingItemForDriver();
  }, []);

  return (
    <>
      {
        open && (
          <>
            <div className=" flex flex-col gap-1 fixed items-center justify-start top-[20%] w-full max-h-[28vh] drop-shadow-xl overflow-auto">
              {bookingComingItem.map((el) => (
                <ComingToCustomerSmall
                  key={el.id}
                  setIsPickUp={setIsPickUp}
                  bookingItem={el}
                />
              ))}
            </div>
          </>
        )
        // (
        //     <>{isOpen ? (<ComingtoCustomerExpand setIsOpen={setIsOpen} setIsPickUp={setIsPickUp} />) : (<ComingToCustomerSmall setIsOpen={setIsOpen} setIsPickUp={setIsPickUp} />)}
        //     </>)
      }
    </>
  );
}
