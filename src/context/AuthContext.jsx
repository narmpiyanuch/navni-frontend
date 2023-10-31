import { createContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { gapi } from "gapi-script";
import {
  addAccessToken,
  getAccessToken,
  removeAccessToken,
} from "../utils/local-storage";
import axios from "../config/axios";

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const clientId =
    "1057347670375-8he167c3ublu3j6k4h9knm8qdn4f5r96.apps.googleusercontent.com";

  const [profile, setProfile] = useState(null);
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    if (getAccessToken()) {
      axios.get("/auth/me").then((res) => {
        setAuthUser(res.data.user);
      });
    }
  }, []);

  useEffect(() => {
    const initClient = () => {
      gapi.client.init({
        clientId: clientId,
        scope: "",
      });
    };
    gapi.load("client:auth2", () => {
      initClient();
    });
  }, []);

  const onSuccess = (res) => {
    setProfile(res.profileObj);
    console.log("success", res);
  };

  const onFailure = (res) => {
    console.log("failed", res);
  };

  const login = async (credential) => {
    const res = await axios.post("auth/user/login", credential);
    addAccessToken(res.data.accessToken);
    setAuthUser(res.data.user);
  };

  const logout = async () => {
    console.log("click");
    removeAccessToken();
    setAuthUser(null);
    setProfile(null);
  };

  return (
    <AuthContext.Provider
      value={{
        login,
        authUser,
        logout,
        onSuccess,
        onFailure,
        profile,
        clientId,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
