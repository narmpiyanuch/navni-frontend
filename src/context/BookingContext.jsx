import { useState } from "react";
import { createContext } from "react";
import axios from "../config/axios";
import { useEffect } from "react";

export const BookingContext = createContext();
export default function BookingContextProvider({ children }) {
  const [bookingWait, setBookingWait] = useState([]);

  const [bookingItem, setBookingItem] = useState([]);

  const [userItem, setUserItem] = useState([]);

  useEffect(() => {
    getBookingItemForUser();
  }, [bookingWait]);

  const getBookingItemForDriver = async () => {
    try {
      const res = await axios.get("/driver/get-booking-item");
      return setBookingItem(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const userCancelBooking = async (id) => {
    try {
      await axios.patch("/booking/cancel-booking", id);
    } catch (error) {
      console.log(error);
    }
  };

  const getBookingItemForUser = async () => {
    try {
      const { data } = await axios.get("/booking/get-booking-item-for-user");
      setUserItem(data);
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
        userItem,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
}
