
export default function OrderCustumerOne({ setIsAccept, onClose }) {
    return (
        <div className="flex flex-col items-center justify-center bg-MonoColor-50 w-[360px] h-[100px] rounded-[40px_40px_40px_40px] px-10">
            <div className='flex items-center justify-between w-full bg-MonoColor-50'>
                <div className='flex flex-col items-start justify-center w-[240px] h-[100px] gap-2'>
                    <div className='flex gap-4'>
                        <p className='text-[16px] flex font-semibold text-MonoColor-400 bg-transparent'>From</p>
                        <p className='text-[16px] flex font-semibold bg-transparent text-MonoColor-700 '>BTS Ari exit 4</p>
                    </div>
                    <div className='flex gap-4'>
                        <p className='text-[16px] flex font-semibold text-MonoColor-400 bg-transparent'>To</p>
                        <p className='text-[16px] flex font-semibold bg-transparent text-MonoColor-700 '>NaNa coffee Ari</p>
                    </div>
                </div>
                <div className='flex justify-center items-center '>
                    <button onClick={() => {
                        setIsAccept(true)
                        onClose()
                    }}
                        className='px-4 py-1 bg-OtherColor-darkGreen text-MonoColor-50 rounded-xl text-[14px] active:bg-OtherColor-lightGreen active:text-MonoColor-700' >
                        <p className='text-[20px] font-semibold'>45 s</p>
                        <p className='text-[16px] font-medium'>Accept</p>
                        <div className='flex justify-center items-center'>
                            <span className="material-symbols-outlined">man</span>
                            <p className='text-[18px] w- font-semibold text-MonoColor-50'>x 1</p>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    )
}
