import wallet from "../../../assets/wallet.png";
import navniLogo from "../../../assets/purpleLogo.png";
import { Link } from "react-router-dom";

export default function UserProfile({ setIsOpen, handleLogOut, profile }) {
  return (
    <div className="flex flex-col fixed bottom-[54%] items-center ">
      <div className="flex gap-4 items-center">
        <img
          src={navniLogo}
          className="rounded-full aspect-square w-[60px] border-4 border-Primary-darker drop-shadow-lg"
        />
        <div className=" flex-shrink">
          <div className="flex justify-between items-center">
            <p className="text-[18px] text-MonoColor-50">
              Hello {profile?.data[0].firstName}
            </p>
            <button
              onClick={() => setIsOpen(true)}
              className="text-[12px] text-OtherColor-yellow active:text-MonoColor-300"
            >
              Edit Profile
            </button>
          </div>
          <hr className="w-[240px] border-[1.5px] rounded-xl" />
          <div className="flex justify-between item-center">
            <div className="flex gap-2 items-center">
              <span className="material-symbols-outlined text-MonoColor-50 font-thin text-[18px]">
                mail
              </span>
              <p className="text-[14px] text-MonoColor-50">
                {profile?.data[0].email}
              </p>
            </div>
            <span
              className="material-symbols-outlined text-MonoColor-50 font-thin text-[16px] pt-2 cursor-pointer"
              onClick={handleLogOut}
            >
              logout
            </span>
          </div>
        </div>
      </div>
      <div className="pt-[20px]">
        <div className="w-[200px] h-[200px] bg-MonoColor-50 rounded-full relative overflow-hidden flex flex-col items-center justify-start ">
          <div className="flex flex-col justify-center items-center gap-2 pt-[20%]">
            <div className="flex relative">
              <div className="w-[60px] h-[16px] rounded-full bg-MonoColor-300 absolute bottom-[-6px] left-[-8px]"></div>
              <img src={wallet} alt="wallet" className="w-[48px] z-10" />
            </div>
            <div className="flex gap-4 items-center">
              <p className="text-MonoColor-700 text-[26px] font-semibold">
                {profile?.data[0].wallet}
              </p>
              <p className="text-MonoColor-700 text-[26px] font-normal">NP</p>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="w-[200px] h-[60px] absolute bg-Secondary-lightest bottom-0 "></div>
            <Link to="/mywallet" className="flex justify-center items-center">
              <button className="w-[28px] h-[28px] rounded-full absolute bg-MonoColor-50 bottom-[16px] text-center text-Primary-dark font-semibold text-[20px] active:bg-Primary-main">
                +
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
