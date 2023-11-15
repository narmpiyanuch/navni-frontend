import { useEffect } from "react";
import ToDestinationSmall from "./ToDestinationSmall";
import useDriver from "../hook/use-driver";

export default function ToDestination({ setIsSuccess }) {
    const { getPickedBookingItemForDriver, bookingPickedItem } = useDriver();

    useEffect(() => {
        getPickedBookingItemForDriver();
    }, []);

    return (
        <>
            <div className=" flex flex-col gap-1 fixed items-center justify-start top-[20%] w-full max-h-[28vh] drop-shadow-xl overflow-auto">
                {bookingPickedItem.map((el) => (
                    <ToDestinationSmall
                        setIsSuccess={setIsSuccess}
                        key={el.key}
                        bookingItem={el}
                    />
                ))}
            </div>
        </>
    );
}
