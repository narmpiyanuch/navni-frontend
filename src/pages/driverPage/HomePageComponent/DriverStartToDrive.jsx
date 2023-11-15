import { Link } from "react-router-dom";
import tuktuk from "../../../assets/tuktuk.png";
import calendar from "../../../assets/calendar.png";
import messageChat from "../../../assets/chat.png";
import ModalChatForDriver from "../../../component/ModalChatForDriver";
import { useState } from "react";

export default function DriverStartToDrive() {
  const [isOpenChat, setIsOpenChat] = useState(false)
  return (
    <div>
      <div className="flex  flex-col items-center justify-center pt-12 gap-10">
        <button className="flex flex-col justify-center items-center relative w-[320px] h-[80px] rounded-3xl bg-Primary-light active:bg-Primary-main">
          <Link to="/startdrive" className="flex justify-center">
            <div className="flex justify-center items-center w-[64px] h-[64px] bg-MonoColor-50 rounded-full absolute top-[-30px]  border-4 border-Primary-light">
              <img src={tuktuk} alt="tuktuk" className="w-[40px]" />
            </div>
            <p className="text-MonoColor-50 text-[20px] font-semibold pt-4">
              Start to drive
            </p>
          </Link>
        </button>
        <button className="flex flex-col justify-center items-center relative w-[320px] h-[80px] rounded-3xl bg-Primary-light active:bg-Primary-main">
          <Link to="/servicehistorydriver" className="flex justify-center">
            <div className="flex justify-center items-center w-[64px] h-[64px] bg-MonoColor-50 rounded-full absolute top-[-30px]  border-4 border-Primary-light">
              <img src={calendar} alt="tuktuk" className="w-[40px]" />
            </div>
            <p className="text-MonoColor-50 text-[20px] font-semibold pt-4">
              History
            </p>
          </Link>
        </button>
      </div>
      <div className="flex gap-10 items-center justify-center mt-8">
        <button onClick={() => setIsOpenChat(true)}
          className="flex flex-col justify-center items-center relative w-[320px] h-[40px] rounded-3xl bg-Secondary-main active:bg-Secondary-dark">
          <div className="flex justify-center items-center w-[64px] h-[64px] bg-MonoColor-50 rounded-full absolute left-0 border-4  border-Secondary-main">
            <img src={messageChat} alt="tuktuk" className="w-[40px]" />
          </div>
          <p className="text-MonoColor-50 text-[20px] font-semibold">
            Live Chat
          </p>
        </button>
      </div>
      <ModalChatForDriver open={isOpenChat} onClose={() => setIsOpenChat(false)} />
    </div>
  );
}
