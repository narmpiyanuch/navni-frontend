import { useState } from "react";
import { createContext } from "react"
import  axios from '../config/axios'
export const DriverContext = createContext()

export default function DriverContextProvider({children}) {

    const [profile, setProfile] = useState();

  const fetchProfile = async () => {
    try {
      const profile = await axios.get("/driver/profile");
      setProfile(profile.data.driverProfile);
    } catch (error) {
      console.log(error);
    }
  };
    
  return (
    <DriverContext.Provider value={{profile,setProfile,fetchProfile}}>{children}</DriverContext.Provider>
  )
}
