import purplePerson from '../../assets/purplePerson.png'

export default function ComingToCustomerSmall({ setIsPickUp }) {

    return (
        <div className="flex flex-col items-center border-2 border-Primary-main bg-MonoColor-50 drop-shadow-xl w-[360px] h-[80px] rounded-[40px_40px_40px_40px] drop-shadow-[0_10px_10px_rgba(0,0,0,0.25) py-2 px-10">
            <div className=" flex items-center justify-center h-full rounded-[20px_20px_0px_0px]] w-[360px] pl-4">
                <div className='flex items-center justify-center h-[40px] gap-2'>
                    <div className='flex flex-col justify-center  w-[180px] h-[100px] gap-1'>
                        <div className='flex gap-2'>
                            <p className='text-[16px] flex font-semibold text-MonoColor-400 bg-transparent'>From</p>
                            <p className='text-[16px] flex font-semibold bg-transparent text-MonoColor-700 '>BTS Ari exit 4</p>
                        </div>
                        <div className='flex gap-2'>
                            <p className='text-[16px] flex font-semibold text-MonoColor-400 bg-transparent'>To</p>
                            <p className='text-[16px] flex font-semibold bg-transparent text-MonoColor-700 '>NaNa coffee Ari</p>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center items-center pr-2'>
                    <img src={purplePerson} alt='person' className='w-6 pb-2' />
                    <p className='text-[14px] font-semibold text-Primary-dark'>x 1</p>
                </div>
                <div className=' gap-2 justify-center items-center'>
                    <button onClick={() => setIsPickUp(true)} className='px-2 py-1 bg-OtherColor-darkGreen text-MonoColor-50 rounded-xl text-[14px] active:bg-OtherColor-lightGreen active:text-MonoColor-700' >
                        <p className='text-[16px] font-semibold'>Pick up</p>
                    </button>
                </div>
            </div>
        </div >
    )

}



