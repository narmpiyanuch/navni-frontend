import { useState } from "react";
import { createContext } from "react";
import axios from "../config/axios";
import { useEffect } from "react";
import { useAuth } from "../feature/hook/use-auth";
import { createErrorSweetAlert } from "../utils/sweetAlert";

export const BookingContext = createContext();
export default function BookingContextProvider({ children }) {
  const [bookingWait, setBookingWait] = useState(null);

  const [bookingItem, setBookingItem] = useState(null);

  const [userItem, setUserItem] = useState(null);

  const { authUser } = useAuth();

  useEffect(() => {
    if (authUser?.role === "USER") {
      getBookingItemForUser();
    }
  }, [authUser, bookingWait]);

  const getBookingItemForDriver = async () => {
    try {
      const { data } = await axios.get("/driver/get-booking-item");
      return setBookingItem(data);
    } catch (error) {
      console.log(error);
    }
  };

  const userCancelBooking = async (id) => {
    try {
      const data = await axios.patch("/booking/cancel-booking", id);
      return data;
    } catch (error) {
      createErrorSweetAlert("ERROR", "Can't cancel booking");
      // console.log(error);
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

  const creatBookingForUser = async (pickup, drop, passenger, price) => {
    try {
      const { data } = await axios.post("/booking", {
        pickedUpStationId: pickup,
        dropDownStationId: drop,
        passenger: passenger,
        price: price,
      });
      setBookingWait(data);
      return data;
    } catch (error) {
      createErrorSweetAlert(
        "Error",
        "Can't Book this trip you have trip on booking"
      );
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
        creatBookingForUser,
        setBookingItem,
        getBookingItemForUser,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
}
