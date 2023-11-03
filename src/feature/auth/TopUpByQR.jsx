// const date_time_topup = [
//     { id: 1, amount: '-20 NP', balance: '100 NP', date_time: '25 Oct 13, 22:40', topup: 'Top-up by QR code' },
//     { id: 2, amount: '+100 NP', balance: '100 NP', date_time: '25 Oct 13, 08:40', topup: 'Top-up by QR code' },
//     { id: 3, amount: '-37 NP', balance: '0 NP', date_time: '25 Oct 13, 22:40', topup: 'Top-up by QR code' },
// ]
import dayjs from "dayjs";

export default function TopUpByQR({ history }) {
  console.log(history?.allTransaction);
  return (
    <div className="flex flex-col">
      <div className="flex flex-col pt-8 justify-center align-middle">
        {history?.allTransaction.map((item) => {
          return (
            <>
              <div className="flex gap-6 text-[14px] justify-between align-middle">
                <div>
                  <p className="text-MonoColor-400">
                    {dayjs(item.createdAt).format("D MMM, YYYY h:mm A")}
                  </p>
                  <p className="px-6">
                    {item.method ? `top-up by ${item.method}` : "paid"}
                  </p>
                </div>

                <div className="text-[14px] py-5">
                  <p>Amount</p>
                  {item.method ? (
                    <p className="text-OtherColor-darkGreen">{item.price}</p>
                  ) : (
                    <p className="text-Error-pressed">{item.price}</p>
                  )}
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}
