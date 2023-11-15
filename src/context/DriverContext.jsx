import { useState } from "react";
import { createContext } from "react";
import axios from "../config/axios";
export const DriverContext = createContext();

export default function DriverContextProvider({ children }) {
    const [profile, setProfile] = useState();

    const fetchProfile = async () => {
        try {
            const profile = await axios.get("/driver/profile");
            setProfile(profile.data.driverProfile);
        } catch (error) {
            console.log(error);
        }
    };

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
                profile,
                setProfile,
                fetchProfile,
                acceptBookingForDriver,
                pickupUserForDriver,
                dropOffUserForDriver,
            }}
        >
            {children}
        </DriverContext.Provider>
    );
}
