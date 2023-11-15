import { useState } from "react";
import { createContext } from "react";
import axios from "../config/axios";

export const BookingContext = createContext();
export default function BookingContextProvider({ children }) {
    const [bookingWait, setBookingWait] = useState();

    const [bookingItem, setBookingItem] = useState([]);

    const getBookingItemForDriver = async () => {
        try {
            const res = await axios.get("/driver/get-booking-item");
            return setBookingItem(res.data);
        } catch (error) {
            console.log(error);
        }
    };

    const userCancelBooking = async (bookingElement) => {
        try {
            await axios.patch("/booking/cancel-booking", bookingElement);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <BookingContext.Provider
            value={{
                setBookingWait,
                bookingWait,
                getBookingItemForDriver,
                bookingItem,
                userCancelBooking,
            }}
        >
            {children}
        </BookingContext.Provider>
    );
}
