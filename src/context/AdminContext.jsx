import axios from "../config/axios";
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import { useAuth } from "../feature/hook/use-auth";
export const AdminContext = createContext();

export default function AdminContextProvider({ children }) {
    const [getAllUsers, setGetAllUsers] = useState([]);
    const { authUser } = useAuth();
    useEffect(() => {
        const init = async () => {
            try {
                if (authUser?.role === "ADMIN") {
                    await getAllUsersForAdmin();
                }
            } catch (error) {
                console.log(error);
            }
        };
        init();
    }, [authUser]);

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
