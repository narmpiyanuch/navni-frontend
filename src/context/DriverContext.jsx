import { createContext } from "react";
import axios from "../config/axios";

export const DriverContext = createContext();

export default function DriverContextProvider({ children }) {
    const acceptBookingForDriver = async (id) => {
        try {
            await axios.patch("/driver/accept-booking", { id });
        } catch (error) {
            console.log(error);
        }
    };

    const pickupUserForDriver = async (id) => {
        try {
            await axios.patch("/driver/pickup-user", { id });
        } catch (error) {
            console.log(error);
        }
    };

    const dropOffUserForDriver = async (id) => {
        try {
            await axios.patch("/driver/dropoff-user", { id });
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <DriverContext.Provider
            value={{
                acceptBookingForDriver,
                pickupUserForDriver,
                dropOffUserForDriver,
            }}
        >
            {children}
        </DriverContext.Provider>
    );
}
