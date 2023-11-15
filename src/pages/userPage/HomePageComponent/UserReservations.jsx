import { Link } from "react-router-dom";
import tuktuk from "../../../assets/tuktuk.png";
import calendar from "../../../assets/calendar.png";
import information from "../../../assets/support.png";
import messageChat from "../../../assets/chat.png";
import socket from "../../../config/socket";
import { useState } from "react";
import ModalChatForUser from "../../../component/ModalChatForUser";
// import { useAuth } from "../../../feature/hook/use-auth";

export default function UserReservations() {
  const [isOpenChat, setIsOpenChat] = useState(false);
  // const { authUser } = useAuth();
  // const join = () => {
  // socket.emit("join_room");
  // };
  return (
    <div className="fixed top-[42%] items-center justify-start pt-6 bg-MonoColor-50 h-full w-screen rounded-[40px_40px_0px_0px] mt-[60px]">
      <div className="flex items-center justify-center pt-4">
        <button className="flex  items-center bg-Primary-dark w-[320px] h-[88px] rounded-3xl gap-10 pl-6 active:bg-Primary-main">
          <Link to="/taxi" className="flex items-center gap-10">
            <div className="flex justify-center items-center w-[64px] h-[64px] bg-Secondary-lightest rounded-full">
              <img src={tuktuk} alt="tuktuk" className="w-[40px]" />
            </div>
            <p className="text-MonoColor-50 text-[20px] font-semibold">
              Tuk Tuk TAXI
            </p>
          </Link>
        </button>
      </div>
      <div className="flex gap-10 items-center justify-center mt-10">
        <button className="flex flex-col justify-center items-center relative w-[132px] h-[100px] rounded-3xl bg-Primary-light active:bg-Primary-main">
          <Link to="/servicehistory">
            <div className="flex justify-center items-center w-[64px] h-[64px] bg-MonoColor-50 rounded-full absolute top-[-30px] border-4  border-Primary-light">
              <img src={calendar} alt="tuktuk" className="w-[40px]" />
            </div>
            <p className="text-MonoColor-50 text-[20px] font-semibold pt-4">
              History
            </p>
          </Link>
        </button>
        <button className="flex flex-col justify-center items-center relative w-[132px] h-[100px] rounded-3xl bg-Primary-light active:bg-Primary-main">
          <Link to="/information">
            <div className="flex justify-center items-center w-[64px] h-[64px] bg-MonoColor-50 rounded-full absolute top-[-30px] left-[32px] border-4  border-Primary-light">
              <img src={information} alt="tuktuk" className="w-[40px]" />
            </div>
            <p className="text-MonoColor-50 text-[20px] font-semibold pt-4">
              Information
            </p>
          </Link>
        </button>
      </div>
      <div className="flex gap-10 items-center justify-center mt-8">
        <button
          onClick={() => setIsOpenChat(true)}
          className="flex flex-col justify-center items-center relative w-[320px] h-[40px] rounded-3xl bg-Secondary-main active:bg-Secondary-dark"
        >
          <div className="flex justify-center items-center w-[64px] h-[64px] bg-MonoColor-50 rounded-full absolute left-0 border-4  border-Secondary-main">
            <img src={messageChat} alt="tuktuk" className="w-[40px]" />
          </div>
          {/* <button onClick={join}> */}
          <p className="text-MonoColor-50 text-[20px] font-semibold">
            Live Chat
          </p>
          {/* </button> */}
        </button>
      </div>
      <ModalChatForUser
        open={isOpenChat}
        onClose={() => setIsOpenChat(false)}
      />
    </div>
  );
}
