const amount = [
    { id: 1, amount: '-20 NP' },
    { id: 2, amount: '+100 NP' },
    { id: 3, amount: '-37 NP' },
]

const balance = [
    { id: 1, balance: '100 NP' },
    { id: 2, balance: '100 NP' },
    { id: 3, balance: '0 NP' },
]

const date_time = [
    { id: 1, date_time: '25 Oct 13, 22:40' },
    { id: 2, date_time: '25 Oct 13, 08:40' },
    { id: 3, date_time: '25 Oct 13, 22:40' },
]

const topup = [
    { id: 1, topup: 'Top-up by QR code' },
    // { id: 2, topup: 'Top-up by QR code' },
    // { id: 3, topup: 'Top-up by QR code' },
]


export default function MyWalletAmount() {
    return (
        <div>
            <div className="flex flex-row gap-5 pt-4">

                <div className="flex flex-col gap-4">
                    {date_time.map(el => {
                        return (
                            <div key={el.id} >
                                <p>{el.date_time}</p>
                            </div>)
                    })
                    }
                </div>

                <div className="flex flex-col gap-4">
                    {topup.map(el => {
                        return (
                            <div key={el.id}>
                                <p>{el.topup}</p>
                            </div>
                        )
                    })
                    }
                </div>


                <div className="flex flex-col gap-4">
                    {amount.map(el => {
                        return (
                            <div key={el.id} >
                                <p>Amount</p>
                                <p>{el.amount}</p>
                            </div>)
                    })
                    }
                </div>

                <div className="flex flex-col gap-4">
                    {balance.map(el => {
                        return (
                            <div key={el.id} >
                                <p>Balance</p>
                                <p>{el.balance}</p>
                            </div>)
                    })
                    }
                </div>

            </div>
        </div>
    )
}