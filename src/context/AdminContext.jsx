import axios from "../config/axios";
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const AdminContext = createContext();

export default function AdminContextProvider({ children }) {
    const [getAllUsers, setGetAllUsers] = useState([]);

    useEffect(() => {
        const init = async () => {
            try {
                await getAllUsersForAdmin();
            } catch (error) {
                console.log(error);
            }
        };
        init();
    }, []);

    const getAllUsersForAdmin = async () => {
        try {
            const { data } = await axios.get("/admin/get-all-user");
            setGetAllUsers(data);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <AdminContext.Provider value={{ getAllUsers }}>
            {children}
        </AdminContext.Provider>
    );
}
