import { createContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import {
    addAccessToken,
    getAccessToken,
    removeAccessToken,
} from "../utils/local-storage";
import axios from "../config/axios";
import { createErrorSweetAlert } from "../utils/sweetAlert";

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
    const [authUser, setAuthUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (getAccessToken()) {
            axios
                .get("/auth/me")
                .then((res) => {
                    setAuthUser(res.data.user);
                })
                .finally(() => {
                    setIsLoading(false);
                });
        } else {
            setIsLoading(false);
        }
    }, []);

    const register = async (credential) => {
        try {
            const res = await axios.post("/auth/register", credential);
            addAccessToken(res.data.accessToken);
            setAuthUser(res.data.user);
        } catch (error) {
            console.log(error);
        }
    };

    const login = async (credential) => {
        try {
            const res = await axios.post("/auth/user/login", credential);
            addAccessToken(res.data.accessToken);
            setAuthUser(res.data.user);
        } catch (error) {
            createErrorSweetAlert(
                "Login Failed",
                "Email or Password is incorrect!"
            );
        }
    };
    const logout = async () => {
        try {
            removeAccessToken();
            setAuthUser(null);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <AuthContext.Provider
            value={{
                login,
                isLoading,
                authUser,
                logout,
                register,
                setIsLoading,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}
