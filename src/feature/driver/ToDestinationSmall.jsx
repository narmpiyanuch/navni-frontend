

export default function ToDestinationSmall({ setIsOpen, setIsSuccess, setIsCancelTrip }) {
    return (
        <div className="flex fixed top-[24%] flex-col items-center justify-start bg-MonoColor-50 drop-shadow-xl w-[360px] h-[100px] rounded-[40px_40px_40px_40px] drop-shadow-[0_35px_35px_rgba(0,0,0,0.25) overflow-hidden">
            <div className="fixed flex items-start pt-6 justify-around  h-full rounded-[20px_20px_0px_0px]] w-[360px]">
                <div className='flex items-center justify-center h-[80px] bg-MonoColor-50 gap-2'>
                    <div className='flex flex-col relative pr-10 rotate-180'>
                        <div className='absolute outline-none top-[-32px] left-[10px] w-[20px] h-[20px] border-4 border-Primary-dark bg-MonoColor-50 rounded-full z-10'></div>
                        <hr className='absolute border-2 border-Primary-dark w-[40px] rotate-90' />
                        <div className='absolute outline-none top-[12px] left-[10px] w-[20px] h-[20px] border-4 border-Primary-dark bg-Primary-dark rounded-full'></div>
                    </div>
                    <div className='flex flex-col items-start justify-start w-[160px] h-[100px] pt-4'>
                        <div className='flex gap-4'>
                            <p className='text-[16px] flex font-semibold text-MonoColor-400 bg-transparent'>To</p>
                            <p className='text-[16px] flex font-semibold bg-transparent text-MonoColor-700 '>NaNa coffee Ari</p>
                        </div>
                    </div>
                </div>
                <div className='flex gap-1 justify-start items-start'>
                    <button onClick={() => setIsSuccess(true)} className='w-[56px] py-2 bg-OtherColor-darkGreen text-MonoColor-50 rounded-xl text-[14px] active:bg-OtherColor-lightGreen active:text-MonoColor-700' >
                        <p className='text-[14px] font-semibold'>Done</p>
                    </button>
                    <button onClick={() => setIsCancelTrip(true)} className='w-[56px] py-2 bg-Error-pressed text-MonoColor-50 rounded-xl text-[14px] active:bg-Error-main active:text-MonoColor-50' >
                        <p className='text-[14px] font-semibold'>Cancel</p>
                    </button>
                </div>
            </div>
            <div className="flex fixed bottom-0 flex-col items-center justify-start bg-Primary-darker w-screen h-[36px] rounded-[0px_0px_40px_40px]" >
                <button onClick={() => setIsOpen(true)} className='flex justify-end w-full pr-10'>
                    <span className="material-symbols-outlined text-MonoColor-50 text-[40px] rotate-180"> expand_less</span>
                </button>
            </div>
        </div >
    )
}
