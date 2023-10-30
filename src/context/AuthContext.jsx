import { createContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import {
    addAccessToken,
    getAccessToken,
    removeAccessToken,
} from "../utils/local-storage";
import axios from "../config/axios";

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
    const [authUser, setAuthUser] = useState(null);

    // useEffect(() => {
    //     if (getAccessToken()) {
    //         axios.get("/auth/me").then((res) => {
    //             setAuthUser(res.data.user);
    //         });
    //     }
    // }, []);

    const login = async (credential) => {
        const res = await axios.post("auth/login", credential);
        addAccessToken(res.data.accessToken);
        setAuthUser(res.data.user);
    };

    const logout = async () => {
        removeAccessToken();
        setAuthUser(null);
    };

    const register = async (credential) => {
        const res = await axios.post("/auth/register", credential);
        addAccessToken(res.data.accessToken);
        setAuthUser(res.data.user);
    };

    return (
        <AuthContext.Provider value={{ login, authUser, logout, register }}>
            {children}
        </AuthContext.Provider>
    );
}
