import { createContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { io } from "socket.io-client";
import {
  addAccessToken,
  getAccessToken,
  removeAccessToken,
} from "../utils/local-storage";
import axios from "../config/axios";
import createSweetAlert from "../utils/sweetAlert";

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [authUser, setAuthUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
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
      const socket = io("http://localhost:8080");
      console.log(
        socket.on("firstEvent", (message) => {
          console.log(message);
        })
      );
    }, 1000);
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
      const res = await axios.post("auth/user/login", credential);
      addAccessToken(res.data.accessToken);
      setAuthUser(res.data.user);
    } catch (error) {
      createSweetAlert("Login Failed", "Email or Password is incorrect!");
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
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
