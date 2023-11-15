import { useState, useEffect } from "react";
import { useAuth } from "../../feature/hook/use-auth";
import axios from "../../config/axios";
import DriverProfile from "./HomePageComponent/DriverProfile";
import DriverStartToDrive from "./HomePageComponent/DriverStartToDrive";
import Logo from "./HomePageComponent/Logo";
import useDriver from "../../feature/hook/use-driver";

export default function HomeDriver() {
  const { logout } = useAuth();

  const {profile, setProfile,fetchProfile} = useDriver();


  useEffect(() => {
    fetchProfile();
  }, []);

  const handleLogOut = () => {
    logout();
  };

  return (
    <div className="flex flex-col m-auto items-center justify-center h-screen w-screen gap-2">
      <DriverProfile handleLogOut={handleLogOut} profile={profile} />
      <Logo />
      <DriverStartToDrive />
      <div className="fixed top-[88%] items-center justify-start pt-6 bg-Primary-main h-full w-screen rounded-[40px_40px_0px_0px] mt-8"></div>
    </div>
  );
}
