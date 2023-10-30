import logoBGpurple from '../../../assets/logoBGpurple.jpg'
import PurpleButton from '../../../feature/payment/PurpleButton'

export default function TaxiPage() {
    return (
        <div className=" flex flex-col m-auto items-center justify-center bg-MonoColor-50 h-screen w-screen gap-2">
            <div className='relative h-full  w-full p-10 bg-Primary-light'>
                <img src={logoBGpurple} alt='logo' className='rounded-full w-[80px] border-4 border-MonoColor-50' />
            </div>
            <div className="fixed top-[60%] items-center justify-start pt-6 bg-MonoColor-50 h-full w-screen  mt-8">
                <div className='flex items-center justify-center h-[140px] bg-MonoColor-50 drop-shadow-md  gap-2'>
                    <div className='flex flex-col relative pr-8'>
                        <div className='absolute outline-none top-[-32px] left-[10px] w-[20px] h-[20px] border-4 border-Primary-dark bg-MonoColor-50 rounded-full z-10'></div>
                        <hr className='absolute border-2 border-Primary-dark w-[40px] rotate-90' />
                        <div className='absolute outline-none top-[12px] left-[10px] w-[20px] h-[20px] border-4 border-Primary-dark bg-Primary-dark rounded-full'></div>
                    </div>
                    <div className='flex flex-col items-start justify-center bg-Primary-lightest w-[240px] h-[100px] rounded-3xl gap-2'>
                        <button className='text-[18px] font-semibold text-MonoColor-400 bg-transparent pl-4 active:text-MonoColor-700'>From</button>
                        <hr className='border-2 border-Primary-light w-[240px]' />
                        <button className='text-[18px] font-semibold text-MonoColor-400 bg-transparent pl-4 active:text-MonoColor-700'>To</button>
                    </div>
                </div>
                <div className='flex justify-end p-4'>
                    <PurpleButton title='Choose trip' />
                </div>
            </div>
        </div>
    )
}
