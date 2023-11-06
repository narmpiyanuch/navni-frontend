import { useState } from "react";
import { useEffect } from "react";
import { useAuth } from "../../feature/hook/use-auth";
import ModalEditProfile from "../../component/ModalEditProfile";
import useMap from "../../feature/hook/use-map";
import UserProfile from "./HomePage/UserProfile";
import UserReservations from "./HomePage/UserReservations";
import axios from "../../config/axios";

export default function HomePageForUser() {
  const [profile, setProfile] = useState();

  const {
    setSelectArea,
    setSelectAreaTo,
    setSubAreaTo,
    setDrop,
    setPickup,
    setSelectAreaFromTo,
    setSelectAreaByTo,
    setAreaFrom,
    setAreaFromByTo,
  } = useMap();

  const fetchProfile = async () => {
    try {
      const profile = await axios.get("/user");
      setProfile(profile);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setAreaFrom();
    setSelectAreaFromTo();
    setSelectArea();
    setSelectAreaTo();
    setSubAreaTo();
    setSelectAreaFromTo();
    setSelectAreaByTo();
    setAreaFromByTo();
    setDrop();
    setPickup();
    fetchProfile();
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  const { logout } = useAuth();

  const handleLogOut = () => {
    logout();
  };

  return (
    <div className="flex flex-col m-auto items-center justify-center bg-Primary-main h-screen w-screen gap-2">
      <UserProfile
        setIsOpen={setIsOpen}
        handleLogOut={handleLogOut}
        profile={profile}
      />
      <UserReservations />
      <ModalEditProfile
        open={isOpen}
        onClose={() => setIsOpen(false)}
        profile={profile}
        setProfile={setProfile}
      />
    </div>
  );
}
