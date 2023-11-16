import useBooking from "../../feature/hook/use-booking";
import { useEffect } from "react";
import HeaderDriver from "../../feature/driver/HeaderDriver";
// import WaitingOrder from "../../feature/driver/WaitingOrder";
import OrderForDriver from "../../feature/driver/OrderForDriver";
import ComingToCustomer from "../../feature/driver/ComingToCustomer";
import ModalAlreadyPickUp from "../../component/ModalAlreadyPickUp";
import { useState } from "react";
import ToDestination from "../../feature/driver/ToDestination";
import ModalDropOffFinish from "../../component/ModalDropOffFinish";
import ModalCancelTrip from "../../component/ModalCancelTrip";
import Map from "../../feature/googlemap/Map";
import useDriver from "../../feature/hook/use-driver";

export default function StartDriverPage() {
  const [isPickUp, setIsPickUp] = useState(false); //ModalAlreadyPickup
  const [isAccept, setIsAccept] = useState(true); //ComingToCustomer
  const [isOpen, setIsOpen] = useState(true); //oderForDriver
  const [isOpenDestination, setOpenDetination] = useState(false); //ToDestination
  const [isSuccess, setIsSuccess] = useState(false); //modalDropoffFinish
  const [isCancelTrip, setIsCancelTrip] = useState(false);

  const { getBookingItemForDriver, bookingItem } = useBooking();
  const { bookingComingItem, getAcceptBookingItemForDriver } = useDriver();

  useEffect(() => {
    getBookingItemForDriver();
    getAcceptBookingItemForDriver();
  }, []);

  console.log(bookingItem);

  return (
    <div className="flex flex-col m-auto items-center justify-center h-screen w-screen gap-2">
      <Map />
      <HeaderDriver />
      {/* <WaitingOrder /> */}

      {isOpen && (
        <OrderForDriver
          setIsAccept={setIsAccept}
          onClose={() => setIsOpen(false)}
          bookingItem={bookingItem}
        />
      )}

      <ComingToCustomer
        setIsPickUp={setIsPickUp}
        isPickUp={isPickUp}
        open={isAccept}
        bookingItem={bookingComingItem}
        setIsSuccess={setIsSuccess}
        setIsAccept={setIsAccept}
      />

      {/* แก้เงื่อนไขของ open ตามที่ map */}

      {/* กล่องข้างบนสามารถวนใช้ได้ */}

      {/* <ModalAlreadyPickUp
        open={isPickUp}
        onCloseAll={() => {
          setIsAccept(true);
          setIsPickUp(false);
          // setOpenDetination(true);
        }}
      /> */}

      <ModalDropOffFinish
        open={isSuccess}
        onClose={() => {
          setIsSuccess(false);
        }}
      />

      <ModalCancelTrip
        to="/homedriver"
        open={isCancelTrip}
        onClose={() => {
          setIsCancelTrip(false);
        }}
      />

      <ModalDropOffFinish
        open={isSuccess}
        onClose={() => {
          setOpenDetination(false);
          setIsSuccess(false);
        }}
      />
    </div>
  );
}
