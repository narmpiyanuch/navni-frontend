import dayjs from "dayjs";

export default function HistoryForm({ services }) {
  return (
    <div>
      {services?.map((item) => (
        <>
          {item.status === "DONE" ? (
            <div
              key={item?.id}
              className="flex flex-col gap-2 justify-center items-center"
            >
              <div className="flex w-screen pl-8 pt-3 items-center">
                <p className="text-[14px] text-MonoColor-500 ">
                  {dayjs(item.createdAt).format("D MMM, YYYY h:mm A")}
                </p>
              </div>
              <div className="  grid grid-cols-5 items-center ">
                <div className="flex flex-col relative top-[6px] left-[32px] ">
                  <div className="absolute outline-none top-[-32px] left-[6px] w-[20px] h-[20px] border-4 border-MonoColor-400 bg-MonoColor-50 rounded-full z-10"></div>
                  <hr className="absolute border-2 border-MonoColor-400 w-[32px] rotate-90" />
                  <div className="absolute outline-none  left-[6px] w-[20px] h-[20px] border-4 border-MonoColor-400 bg-MonoColor-400 rounded-full"></div>
                </div>
                <div className="flex flex-col items-start justify-start gap-2 w-[200px] col-start-2 col-span-2">
                  <div className="flex gap-1">
                    <p className="text-[14px] text-MonoColor-500 ">From</p>
                    <p className="text-[14px] text-MonoColor-500 ">
                      {item.dropDownStation.stationName}
                    </p>
                  </div>
                  <div className="flex gap-5">
                    <p className="text-[14px] text-MonoColor-500">To</p>
                    <p className="text-[14px] text-MonoColor-500">
                      {item.pickedUpStation.stationName}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-4 justify-center items-center">
                  <p className="text-[14px] text-MonoColor-500">Paid</p>
                  <p className="text-[14px] text-Error-pressed">{item.price}</p>
                </div>
                <div className="flex flex-col gap-4 justify-center items-center pr-6">
                  <p className="text-[14px] text-MonoColor-500">Status</p>
                  <p className="text-[14px] text-Primary-dark font-semibold">
                    {item.status}
                  </p>
                </div>
              </div>
              <hr className="border border-MonoColor-300 w-full" />
            </div>
          ) : item.status === "CANCEL" ? (
            <div
              key={item?.id}
              className="flex flex-col gap-2 justify-center items-center"
            >
              <div className="flex w-screen pl-8 pt-3 items-center">
                <p className="text-[14px] text-MonoColor-500 ">
                  {dayjs(item.createdAt).format("D MMM, YYYY h:mm A")}
                </p>
              </div>
              <div className="  grid grid-cols-5 items-center ">
                <div className="flex flex-col relative top-[6px] left-[32px] ">
                  <div className="absolute outline-none top-[-32px] left-[6px] w-[20px] h-[20px] border-4 border-MonoColor-400 bg-MonoColor-50 rounded-full z-10"></div>
                  <hr className="absolute border-2 border-MonoColor-400 w-[32px] rotate-90" />
                  <div className="absolute outline-none  left-[6px] w-[20px] h-[20px] border-4 border-MonoColor-400 bg-MonoColor-400 rounded-full"></div>
                </div>
                <div className="flex flex-col items-start justify-start gap-2 w-[200px] col-start-2 col-span-2">
                  <div className="flex gap-1">
                    <p className="text-[14px] text-MonoColor-500 ">From</p>
                    <p className="text-[14px] text-MonoColor-500 ">
                      {item.dropDownStation.stationName}
                    </p>
                  </div>
                  <div className="flex gap-5">
                    <p className="text-[14px] text-MonoColor-500">To</p>
                    <p className="text-[14px] text-MonoColor-500">
                      {item.pickedUpStation.stationName}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-4 justify-center items-center">
                  <p className="text-[14px] text-MonoColor-500">Paid</p>
                  <p className="text-[14px] text-MonoColor-400 font-semibold">
                    -
                  </p>
                </div>
                <div className="flex flex-col gap-4 justify-center items-center pr-6">
                  <p className="text-[14px] text-MonoColor-500">Status</p>
                  <p className="text-[14px] text-Primary-dark font-semibold">
                    {item.status}
                  </p>
                </div>
              </div>
              <hr className="border border-MonoColor-300 w-full" />
            </div>
          ) : (
            ""
          )}
        </>
      ))}
    </div>
  );
}
