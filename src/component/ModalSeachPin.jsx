import { useEffect } from "react";
import purplePin from "../assets/purplePin.png";
import useMap from "../feature/hook/use-map";
import { useState } from "react";
import axios from "axios";

const namePin = [
  { id: 1, title: "Wannamorn Building", distance: "40 m" },
  { id: 2, title: "Wannamorn Building", distance: "40 m" },
  { id: 3, title: "Wannamorn Building", distance: "40 m" },
  { id: 4, title: "Wannamorn Building", distance: "40 m" },
  { id: 5, title: "Wannamorn Building", distance: "40 m" },
  { id: 6, title: "Wannamorn Building", distance: "40 m" },
];

export default function ModalSearchPin({ open, onClose }) {
  const {
    areaFromByTo,
    areaFrom,
    subArea,
    selectArea,
    setSelectArea,
    setSubAreaTo,
    selectAreaTo,
    setPickup,
    pickup,
    drop
  } = useMap();



  // useEffect(() => {
  //   setSelectArea();
  //   setSubAreaTo();
  // }, []);

  return (
    <>
      {open && (
        <>
          <div className=" fixed inset-0 bg-MonoColor-900 opacity-50 z-20"></div>
          <div className=" fixed inset-0 z-30 ">
            <div className=" flex justify-center items-center min-h-full p-4 ">
              <div className="fixed top-[30%] items-center justify-start bg-MonoColor-50 h-full w-screen rounded-[20px_20px_0px_0px] overflow-hidden transit ">
                <div className="flex bg-Primary-darker h-[60px] justify-between px-4 items-center gap-4">
                  <p className="text-[14px] text-MonoColor-50 ">
                    Choose your pick-up and drop-off point
                  </p>
                  <span
                    className="material-symbols-outlined text-MonoColor-50 hover:cursor-pointer"
                    onClick={onClose}
                  >
                    close
                  </span>
                </div>
                <div className="flex items-center justify-center h-[140px] bg-MonoColor-50 gap-2">
                  <div className="flex flex-col relative pr-8">
                    <div className="absolute outline-none top-[-32px] left-[10px] w-[20px] h-[20px] border-4 border-Primary-dark bg-MonoColor-50 rounded-full z-10"></div>
                    <hr className="absolute border-2 border-Primary-dark w-[40px] rotate-90" />
                    <div className="absolute outline-none top-[12px] left-[10px] w-[20px] h-[20px] border-4 border-Primary-dark bg-Primary-dark rounded-full"></div>
                  </div>
                  <div className="flex flex-col items-start justify-center bg-Primary-lightest w-[240px] h-[100px] rounded-3xl gap-2">
                    <div
                      placeholder="From"
                      className={`outline-none text-[18px] font-semibold ${
                        pickup ? "text-MonoColor-700" : "text-MonoColor-400"
                      }  bg-transparent pl-4 `}
                    >
                      {pickup ? pickup.stationName : "From"}
                    </div>
                    <hr className="border-2 border-Primary-light w-[240px]" />
                    <div
                      placeholder="To"
                      className={`outline-none text-[18px] font-semibold text-MonoColor-400  bg-transparent pl-4`}
                    >
                      {drop
                        ? drop.stationName
                        
                        : "To"}
                    </div>
                  </div>
                </div>
                <div>
                  <p className="text-[14px] text-MonoColor-400 pl-4">
                    All hop point
                  </p>
                  {areaFrom
                    ? areaFrom?.map((el) => (
                        <div
                          key={el.id}
                          className="flex justify-between px-4 py-2 items-center"
                        >
                          <button
                            onClick={() => {
                              setSelectArea(el);
                              setPickup(el)
                              // setSelectAreaTo()
                            }}
                            className="flex items-end gap-2"
                          >
                            <img
                              src={purplePin}
                              alt="pin"
                              className="w-[32px]"
                            />
                            <p className="text-[16px] text-MonoColor-700 active:text-MonoColor-300">
                              {el.stationName}
                            </p>
                          </button>
                          <p className="text-[16px] text-MonoColor-400">
                            {" "}
                            {el?.distance}
                          </p>
                        </div>
                      ))
                    : subArea?.map((el) => (
                        <div
                          key={el.id}
                          className="flex justify-between px-4 py-2 items-center"
                        >
                          <button
                            onClick={() => {
                              setSelectArea(el);
                              // setSelectAreaTo()
                              setPickup(el)
                            }}
                            className="flex items-end gap-2"
                          >
                            <img
                              src={purplePin}
                              alt="pin"
                              className="w-[32px]"
                            />
                            <p className="text-[16px] text-MonoColor-700 active:text-MonoColor-300">
                              {el.stationName}
                            </p>
                          </button>
                          <p className="text-[16px] text-MonoColor-400">
                            {" "}
                            {el?.distance}
                          </p>
                        </div>
                      ))}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
