import dayjs from "dayjs";

export default function TopUpByQR({ history }) {
  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-col justify-center">
        {history?.allTransaction.map((item, index) => {
          return (
            <div key={index + 1} className="flex">
              <div className="flex flex-row text-[14px] items-center gap-20 border-t-2">
                <div className="flex flex-col p-2">
                  <p className="text-MonoColor-600 font-bold p-2">
                    {dayjs(item.createdAt).format("D MMM, YYYY h:mm A")}
                  </p>
                  <p className="flex justify-center text-MonoColor-500 p-2">
                    {item.method ? `top-up by ${item.method}` : "paid"}
                  </p>
                </div>
                <div className=" text-[14px] flex flex-col items-center p-2">
                  <p className="text-MonoColor-600 p-1 flex items-center">
                    Amount
                  </p>
                  {item.method ? (
                    <p className="text-OtherColor-darkGreen p-1">
                      {item.price}
                    </p>
                  ) : (
                    <p className="text-Error-pressed p-1">{item.price}</p>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
