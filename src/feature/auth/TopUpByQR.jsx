const date_time_topup = [
    { id: 1, amount: '-20 NP', balance: '100 NP', date_time: '25 Oct 13, 22:40', topup: 'Top-up by QR code' }
]

export default function TopUpByQR() {
    return (
            <div className="flex flex-col gap-4 pt-8">
                {date_time_topup.map(el => {
                    return (
                        <div key={el.id} >
                            <p className="text-[14px] text-MonoColor-400">
                                {el.date_time_topup}</p>
                        </div>
                    )
                })}
            </div>
            )
}