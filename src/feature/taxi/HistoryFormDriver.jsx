// const hittorydriver = [
//     { id: 1, to: 'BTS Ari exit 4', fera: '100NP', from: 'Uni Villa', datetime: '25 Oct 13, 22:40' },
//     { id: 2, to: 'BTS Ari exit 4', fera: 'Cancelled', from: 'Uni Villa', datetime: '25 Oct 10, 08:00' },
//     { id: 3, to: 'BTS Ari exit 4', fera: '100NP', from: 'Uni Villa', datetime: '25 Oct 1, 21:40' },
// ]

import dayjs from "dayjs";

export default function HistoryFormDriver({ services }) {
  return (
    <>
      {services?.map((item) => (
        <div
          key={item.id}
          className="flex flex-col gap-2 justify-center items-center"
        >
          <div className="flex w-screen pl-10 items-center justify-start">
            <p className="text-[14px] text-MonoColor-500 ">
              {dayjs(item.createdAt).format("D MMM, YYYY h:mm A")}
            </p>
          </div>
          <div className="grid grid-cols-4 justify-center items-center">
            <div className="flex flex-col relative top-[6px] left-[32px] ">
              <div className="absolute outline-none top-[-32px] left-[6px] w-[20px] h-[20px] border-4 border-MonoColor-400 bg-MonoColor-50 rounded-full z-10"></div>
              <hr className="absolute border-2 border-MonoColor-400 w-[32px] rotate-90" />
              <div className="absolute outline-none  left-[6px] w-[20px] h-[20px] border-4 border-MonoColor-400 bg-MonoColor-400 rounded-full"></div>
            </div>
            <div className="flex flex-col items- justify-start gap-2 w-[200px] col-start-2 col-span-2">
              <div className="flex gap-6">
                <p className="text-[14px] text-MonoColor-500 flex items-center">
                  From
                </p>
                <p className="text-[14px] text-MonoColor-500">
                  {item.pickedUpStation.stationName}
                </p>
              </div>
              <div className="flex gap-10">
                <p className="text-[14px] text-MonoColor-500 flex items-center">
                  To
                </p>
                <p className="text-[14px] text-MonoColor-500">
                  {item.dropDownStation.stationName}
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center gap-2">
              <p className="text-[12px] text-MonoColor-500">Status</p>
              <p className="text-[14px] text-Primary-dark text-center font-semibold">
                {item.status}
              </p>
            </div>
          </div>
          <hr className="border border-MonoColor-300 w-full" />
        </div>
      ))}
    </>
  );
}
