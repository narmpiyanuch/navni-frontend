import logoBGpurple from "../../../assets/logoBGpurple.jpg";
import PurpleButton from "../../../feature/payment/PurpleButton";
import ModalSearchPin from "../../../component/ModalSeachPin";
import { useState } from "react";
import ModalClickPin from "../../../component/ModalClickPin";
import { Link } from "react-router-dom";
import Map from "../../../feature/googlemap/Map";
import useMap from "../../../feature/hook/use-map";
import ModalSearchPinTo from "../../../component/ModalSeachPinTo";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function TaxiPage() {
  const {
    areaFromByTo,
    selectArea,

    selectAreaFromTo,
  } = useMap();
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenPin, setIsOpenPin] = useState(false);
  const [isOpenTo, setIsOpenTo] = useState(false);
  const [isOpenPinTo, setIsOpenPinTo] = useState(false);
  const navigate = useNavigate();

  return (
    <div className=" flex flex-col m-auto items-center justify-center bg-MonoColor-50 h-screen w-screen gap-2">
      <div className="h-full w-full">
        <div className="relative h-full  w-full  bg-Primary-light">
          <div className="flex absolute top-0 left-0 p-5">
            <img
              onClick={() => {
                navigate("/");
              }}
              src={logoBGpurple}
              alt="logo"
              className="z-40 rounded-full w-[80px] border-4 border-MonoColor-50 active:border-Primary-main hover:cursor-pointer"
            />
          </div>
          <Map />
        </div>
      </div>
      <div className="fixed top-[60%] items-center justify-start pt-6 bg-MonoColor-50 h-full w-screen  mt-8">
        <div className="flex items-center justify-center h-[140px] bg-MonoColor-50 drop-shadow-md  gap-2">
          <button
            onClick={() => setIsOpenPin(true)}
            className="flex flex-col relative pr-8"
          >
            <div className="absolute outline-none top-[-32px] left-[10px] w-[20px] h-[20px] border-4 border-Primary-dark bg-MonoColor-50 rounded-full z-10"></div>
            <hr className="absolute border-2 border-Primary-dark w-[40px] rotate-90" />
            <div className="absolute outline-none top-[12px] left-[10px] w-[20px] h-[20px] border-4 border-Primary-dark bg-Primary-dark rounded-full"></div>
          </button>
          <div className="flex flex-col items-start justify-center bg-Primary-lightest w-[240px] h-[100px] rounded-3xl gap-2">
            <button
              onClick={() => setIsOpen(true)}
              className={`text-[18px] flex w-full font-semibold ${
                selectArea ? "text-MonoColor-700" : "text-MonoColor-400"
              }  bg-transparent pl-4 `}
            >
              {selectArea ? selectArea.stationName : "From"}
            </button>
            <hr className="border-2 border-Primary-light w-[240px]" />
            <button
              onClick={() => setIsOpenTo(true)}
              className={`text-[18px] flex w-full font-semibold ${
                selectAreaFromTo
                  ? "text-MonoColor-700"
                  : areaFromByTo
                  ? "text-MonoColor-700"
                  : "text-MonoColor-400"
              }  bg-transparent pl-4`}
            >
              {selectAreaFromTo
                ? selectAreaFromTo.stationName
                : areaFromByTo
                ? areaFromByTo.stationName
                : "To"}
            </button>
          </div>
        </div>
        <div className="flex justify-end p-4">
          <Link to={'/numberpeople'}>
          <PurpleButton title="Choose trip" />
          </Link>
        </div>
        <ModalSearchPin open={isOpen} onClose={() => setIsOpen(false)} />
        <ModalSearchPinTo open={isOpenTo} onClose={() => setIsOpenTo(false)} />
        <ModalClickPin open={isOpenPin} onClose={() => setIsOpenPin(false)} />
      </div>
    </div>
  );
}

//  link ModalClickPin ไปก่อนนะ มี error ตอนเชื่อม ชื่อซ้ำ แก้ตอนมี google map อีกที
