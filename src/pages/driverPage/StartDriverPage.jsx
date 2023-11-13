import HeaderDriver from "../../feature/driver/HeaderDriver";
// import WaitingOrder from "../../feature/driver/WaitingOrder";
import OrderForDriver from "../../feature/driver/OrderForDriver";
import ComingToCustomer from "../../feature/driver/ComingToCustomer";
import ModalAlreadyPickUp from "../../component/ModalAlreadyPickUp";
import { useState } from "react";
import ToDestination from "../../feature/driver/ToDestination";
import ModalDropOffFinish from "../../component/ModalDropOffFinish";
import ModalCancelTrip from "../../component/ModalCancelTrip";

export default function StartDriverPage() {
    const [isPickUp, setIsPickUp] = useState(false); //ModalAlreadyPickup
    const [isAccept, setIsAccept] = useState(false); //ComingToCustomer
    const [isOpen, setIsOpen] = useState(true); //oderForDriver
    const [isOpenDestination, setOpenDetination] = useState(false); //ToDestination
    const [isSuccess, setIsSuccess] = useState(false); //modalDropoffFinish
    const [isCancelTrip, setIsCancelTrip] = useState(false);

    return (
        <div className="flex flex-col m-auto items-center justify-center h-screen w-screen gap-2">
            <HeaderDriver />

            {/* <WaitingOrder /> */}

            {isOpen && (
                <OrderForDriver
                    setIsAccept={setIsAccept}
                    onClose={() => setIsOpen(false)}
                    setIsOpen={setIsOpen}
                />
            )}

            <ComingToCustomer setIsPickUp={setIsPickUp} open={isAccept} />
            {/* กล่องข้างบนสามารถวนใช้ได้ */}

            <ModalAlreadyPickUp
                open={isPickUp}
                onCloseAll={() => {
                    setIsAccept(false);
                    setIsPickUp(false);
                    setOpenDetination(true);
                }}
            />

            {isOpenDestination && (
                <ToDestination
                    setIsSuccess={setIsSuccess}
                    setIsCancelTrip={setIsCancelTrip}
                />
            )}

            <ModalDropOffFinish
                open={isSuccess}
                onClose={() => {
                    setOpenDetination(false);
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
        </div>
    );
}
