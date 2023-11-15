import PurpleButton from "../../../feature/payment/PurpleButton";
import logoBGpurple from "../../../assets/logoBGpurple.jpg";
import ModalSearchPin from "../../../component/ModalSeachPin";
import { useState } from "react";
import ModalClickPin from "../../../component/ModalClickPin";
import Map from "../../../feature/googlemap/Map";
import useMap from "../../../feature/hook/use-map";
import ModalSearchPinTo from "../../../component/ModalSeachPinTo";
import { useNavigate } from "react-router-dom";
import { createErrorSweetAlert } from "../../../utils/sweetAlert";
// import LogoNavigate from "../../../component/LogoNavigate";
import { useEffect } from "react";

export default function TaxiPage() {
  const { selectArea, drop, pickup, isOpenPin, setIsOpenPin } = useMap();
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenTo, setIsOpenTo] = useState(false);
  useEffect(() => {
    setIsOpenPin(false);
  }, []);

  const navigate = useNavigate();
  const handleChooseTrip = () => {
    if (drop && pickup) {
      return navigate("/numberpeople");
    } else if (drop) {
      return createErrorSweetAlert("Please select From Area");
    } else if (pickup) {
      return createErrorSweetAlert("Please select To Area");
    }
    return createErrorSweetAlert("Please slecect From and To Area");
  };

  return (
    <div className=" flex flex-col m-auto items-center justify-center bg-MonoColor-50 h-screen w-screen gap-2">
      <div className="h-full w-full">
        <div className="relative h-full  w-full  bg-Primary-light">
          <div className="flex absolute top-0 left-0 p-5">
            <img
              onClick={() => {
                navigate("/home");
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
            onClick={() => {}}
            className="flex flex-col relative pr-8 cursor-default"
          >
            <div className="absolute outline-none top-[-32px] left-[10px] w-[20px] h-[20px] border-4 border-Primary-dark bg-MonoColor-50 rounded-full z-10"></div>
            <hr className="absolute border-2 border-Primary-dark w-[40px] rotate-90" />
            <div className="absolute outline-none top-[12px] left-[10px] w-[20px] h-[20px] border-4 border-Primary-dark bg-Primary-dark rounded-full"></div>
          </button>
          <div className="flex flex-col items-start justify-center bg-Primary-lightest w-[240px] h-[100px] rounded-3xl gap-2">
            <button
              onClick={() => setIsOpen(true)}
              className={`  text-[18px] flex flex-col overflow-hidden text-ellipsis whitespace-nowrap  w-full font-semibold ${
                selectArea ? "text-MonoColor-700" : "text-MonoColor-400"
              }  bg-transparent pl-4 `}
            >
              {pickup ? pickup.stationName : "From"}
            </button>
            <hr className="border-2 border-Primary-light w-[240px]" />
            <button
              onClick={() => setIsOpenTo(true)}
              className={`text-[18px] flex  font-semibold overflow-hidden text-ellipsis whitespace-nowrap  w-full  ${
                drop ? "text-MonoColor-700" : "text-MonoColor-400"
              }  bg-transparent pl-4 `}
            >
              {drop ? drop.stationName : "To"}
            </button>
          </div>
        </div>
        <div className="flex justify-end p-4">
          {/* <Link to={'/numberpeople'}> */}
          <PurpleButton
            onClick={() => {
              handleChooseTrip();
            }}
            title="Choose trip"
          />
          {/* </Link> */}
        </div>
        <ModalSearchPin open={isOpen} onClose={() => setIsOpen(false)} />
        <ModalSearchPinTo open={isOpenTo} onClose={() => setIsOpenTo(false)} />
        <ModalClickPin open={isOpenPin} onClose={() => setIsOpenPin(false)} />
      </div>
    </div>
  );
}

//  link ModalClickPin ไปก่อนนะ มี error ตอนเชื่อม ชื่อซ้ำ แก้ตอนมี google map อีกที
