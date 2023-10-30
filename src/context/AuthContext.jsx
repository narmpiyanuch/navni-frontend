import { createContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import {
  addAccessToken,
  getAccessToken,
  removeAccessToken,
} from "../utils/local-storage";
import axios from "../config/axios";
import { Children } from "react";

export const AuthContext = createContext({ Children });

export default function AuthContextProvider() {
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    if (getAccessToken()) {
      axios.get("/auth/me").then((res) => {
        setAuthUser(res.data.user);
      });
    }
  }, []);

  const login = async (credential) => {
    const res = await axios.post("auth/user/login", credential);
    addAccessToken(res.data.accessToken);
    setAuthUser(res.data.user);
  };

  const logout = async () => {
    removeAccessToken();
    setAuthUser(null);
  };

  return (
    <AuthContext.Provider value={{ login, authUser, logout }}>
      {Children}
    </AuthContext.Provider>
  );
}