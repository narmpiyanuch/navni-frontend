import purplePerson from '../../assets/purplePerson.png'

export default function ToDestinationSmall({ setIsSuccess }) {
    return (
        <div className="flex flex-col items-center border-2 border-Primary-main bg-Primary-lightest drop-shadow-xl w-[360px] h-[50px] rounded-[40px_40px_40px_40px] drop-shadow-[0_10px_10px_rgba(0,0,0,0.25) py-2 px-10">
            <div className="flex items-center justify-center h-full rounded-[20px_20px_0px_0px]] w-[360px] pl-4">
                <div className='flex items-center justify-center h-[80px] gap-2'>
                    <div className='flex flex-col  justify-center w-[160px] h-[100px] '>
                        <div className='flex gap-4'>
                            <p className='text-[16px] flex font-semibold text-MonoColor-400 bg-transparent'>To</p>
                            <p className='text-[16px] flex font-semibold bg-transparent text-MonoColor-700 '>NaNa coffee Ari</p>
                        </div>
                    </div>
                </div>
                <div className='flex'>
                    <div className='flex justify-center items-center pr-2'>
                        <img src={purplePerson} alt='person' className='w-6 pb-2' />
                        <p className='text-[14px] font-semibold text-Primary-dark'>x 1</p>
                    </div>
                    <div className='flex gap-1 justify-start items-start'>
                        <button onClick={() => setIsSuccess(true)} className='w-[56px] py-1 bg-OtherColor-darkGreen text-MonoColor-50 rounded-xl text-[14px] active:bg-OtherColor-lightGreen active:text-MonoColor-700' >
                            <p className='text-[14px] font-semibold'>Done</p>
                        </button>
                    </div>
                </div>
            </div>

        </div >
    )
}
