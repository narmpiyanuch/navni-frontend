const date_time_topup = [
    { id: 1, amount: '-20 NP', balance: '100 NP', date_time: '25 Oct 13, 22:40', topup: 'Top-up by QR code' },
    { id: 2, amount: '+100 NP', balance: '100 NP', date_time: '25 Oct 13, 08:40', topup: 'Top-up by QR code' },
    { id: 3, amount: '-37 NP', balance: '0 NP', date_time: '25 Oct 13, 22:40', topup: 'Top-up by QR code' },
]


export default function TopUpByQR() {
    return (
        <div className="flex flex-col">
            <div className="flex flex-col pt-8 justify-center align-middle">
                {date_time_topup.map(date_time_topup => {
                    return (
                        <>
                            <div className="flex gap-6 text-[14px] justify-between align-middle">
                                <div key={date_time_topup.id} >
                                    <p className="text-MonoColor-400">{date_time_topup.date_time}</p>
                                    <p className="px-6">{date_time_topup.topup}</p>
                                </div>

                                <div key={date_time_topup.id} className="text-[14px] py-5">
                                    <p>Amount</p>
                                    <p className="text-Error-pressed">{date_time_topup.amount}</p>
                                </div>

                                <div key={date_time_topup.id} className="text-[14px] py-5">
                                    <p>Balance</p>
                                    <p className="text-Primary-dark">{date_time_topup.balance}</p>
                                </div>
                            </div>
                        </>
                    )
                })}
            </div>
        </div>
    )
}