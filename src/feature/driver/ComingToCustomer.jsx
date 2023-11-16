// import { useState } from "react";
// import { useEffect } from "react";
import ComingToCustomerSmall from "./ComingToCustomerSmall";
// import useDriver from "../hook/use-driver";
import ToDestinationSmall from "./ToDestinationSmall";
// import ComingtoCustomerExpand from "./ComingToCustomerExpand";

export default function ComingToCustomer({
  setIsAccept,
  setIsPickUp,
  setIsSuccess,
  bookingComingItem,
  bookingPickedItem,
}) {
  return (
    <>
      {bookingComingItem && (
        <>
          <div className=" flex flex-col gap-1 fixed items-center justify-start top-[24%] w-full max-h-[28vh] drop-shadow-xl overflow-auto">
            {bookingComingItem.map((el) =>
              el.status === "PICKED" ? (
                <ToDestinationSmall
                  key={el.id}
                  setIsSuccess={setIsSuccess}
                  bookingItem={el}
                  setIsAccept={setIsAccept}
                  bookingPickedItem={bookingPickedItem}
                />
              ) : (
                <ComingToCustomerSmall
                  key={el.id}
                  setIsPickUp={setIsPickUp}
                  bookingItem={el}
                />
              )
            )}
          </div>
        </>
      )}
    </>
  );
}
