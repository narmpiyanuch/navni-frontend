

const dataHistory = [
    { id: 1, date: '25 Oct 13, 22:40', origin: 'BTS Ari exit 4', terminal: 'NaNa coffee Ari', paid: '-12 NP', balance: '100NP' },
    { id: 2, date: '25 Oct 13, 22:40', origin: 'BTS Ari exit 4', terminal: 'NaNa coffee Ari', paid: '-12 NP', balance: '100NP' },
    { id: 3, date: '25 Oct 13, 22:40', origin: 'BTS Ari exit 4', terminal: 'NaNa coffee Ari', paid: '-12 NP', balance: '100NP' },
    { id: 4, date: '25 Oct 13, 22:40', origin: 'BTS Ari exit 4', terminal: 'NaNa coffee Ari', paid: '-12 NP', balance: '100NP' },
    { id: 5, date: '25 Oct 13, 22:40', origin: 'BTS Ari exit 4', terminal: 'NaNa coffee Ari', paid: '-12 NP', balance: '100NP' },
]


export default function HistoryForm() {
    return (
        <>
            {dataHistory.map(el => <div key={el.id} className='flex flex-col gap-2 justify-center items-center'>
                <div className="flex  w-screen pl-8 items-center justify-start">
                    <p className="text-[14px] text-MonoColor-400 ">{el.date}</p>
                </div>
                <div className="grid grid-cols-5 justify-center items-center ">
                    <div className='flex flex-col relative top-[6px] left-[32px] '>
                        <div className='absolute outline-none top-[-32px] left-[6px] w-[20px] h-[20px] border-4 border-MonoColor-400 bg-MonoColor-50 rounded-full z-10'></div>
                        <hr className='absolute border-2 border-MonoColor-400 w-[32px] rotate-90' />
                        <div className='absolute outline-none  left-[6px] w-[20px] h-[20px] border-4 border-MonoColor-400 bg-MonoColor-400 rounded-full'></div>
                    </div>
                    <div className='flex flex-col items-start justify-start gap-2 w-[200px] col-start-2 col-span-2'>
                        <div className='flex gap-4'>
                            <p className='text-[14px] text-MonoColor-400 '>From</p>
                            <p className='text-[14px] text-MonoColor-400 '>{el.origin}</p>
                        </div>
                        <div className='flex gap-4'>
                            <p className='text-[14px] text-MonoColor-400'>To</p>
                            <p className='text-[14px] text-MonoColor-400 '>{el.terminal}</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-4 justify-center items-center'>
                        <p className='text-[12px] text-MonoColor-400'>Paid</p>
                        <p className='text-[12px] text-Error-pressed'>{el.paid}</p>
                    </div>
                    <div className='flex flex-col gap-4 justify-center items-center pr-6'>
                        <p className='text-[12px] text-MonoColor-400'>Balance</p>
                        <p className='text-[12px] text-Primary-dark '>{el.balance}</p>
                    </div>
                </div >
                <hr className="border border-MonoColor-300 w-full mt-4" />
            </div >)}
        </>
    )
}
