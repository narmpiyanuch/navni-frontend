import purpleTukTuk from '../../../assets/purpleTukTuk.png'
import NumberButton from '../../../feature/taxi/NumberButton'
import PurpleButton from '../../../feature/payment/PurpleButton'
import { useState } from 'react'
import ModalNotEnoughPayment from '../../../component/ModalNotEnoughPayment'
import ModalPayment from '../../../component/ModalPayment'
import useMap from '../../../feature/hook/use-map'
import { Link } from 'react-router-dom'

export default function ChooseNemberPeoplePage() {
    const [isOpen, setIsOpen] = useState(false);
    const [click, setClick] = useState('')
    const personIconId = [1, 2, 3, 4, 5, 6]
    const {pickup,drop}=useMap()
    console.log(click)
    return (
        <div className='flex flex-col m-auto items-center justify-start  h-screen w-screen gap-2'>
            <div className=' flex flex-col pt-10 items-start w-full '>
                <Link to='/taxi'>
                <span className="material-symbols-outlined text-Primary-dark  font-bold text-[32px] active:text-MonoColor-300 pl-4"> navigate_before</span>
                </Link>
            </div>
            <div className='flex flex-col items-center justify-center h-[140px] w-full  drop-shadow-md gap-2'>
                <div className='flex justify-center items-center gap-6'>
                    <div className='flex flex-col relative pr-8'>
                        <div className='absolute outline-none top-[-32px] left-[10px] w-[20px] h-[20px] border-4 border-Primary-dark bg-MonoColor-50 rounded-full z-10'></div>
                        <hr className='absolute border-2 border-Primary-dark w-[40px] rotate-90' />
                        <div className='absolute outline-none top-[12px] left-[10px] w-[20px] h-[20px] border-4 border-Primary-dark bg-Primary-dark rounded-full'></div>
                    </div>
                    <div className='flex flex-col items-start justify-center  w-[240px] h-[100px] rounded-3xl gap-6'>
                        <div className='flex gap-4'>
                            <p className='text-[16px] flex font-semibold text-MonoColor-400 bg-transparent'>From</p>
                            <p className='text-[16px] flex font-semibold bg-transparent text-MonoColor-700 '>{pickup?pickup.stationName:null}</p>
                        </div>
                        <div className='flex gap-4'>
                            <p className='text-[16px] flex font-semibold text-MonoColor-400 bg-transparent'>To</p>
                            <p className='text-[16px] flex font-semibold bg-transparent text-MonoColor-700 '>{drop?drop.stationName:null}</p>
                        </div>
                    </div>
                </div>
                <hr className='border-1] drop-shadow-md border-MonoColor-200 t w-full mt-4' />

            </div>
            <div className='flex relative'>
                {/*รอแก้เชื่อมกับปุ่ม  */}
                <img src={purpleTukTuk} alt='tuktuk' className='w-[240px]' />
                <div className='absolute top-[72px] left-[72px]'>
                    <div className='grid grid-cols-3 '>
                        {personIconId.map((el) => (<span key={el} className={`material-symbols-outlined text-[40px] ${el <= click ? 'text-Primary-dark' : "text-MonoColor-400"} `}>boy</span>))}

                    </div>
                </div>
            </div>
            <p className='text-MonoColor-400'>How many people are going?</p>
            <div className='grid grid-cols-3 gap-4 p-4'>
                <NumberButton setClick={setClick} click={click} />
            </div>
            <div>
                <div className='flex items-center gap-4'>
                    <input type='checkbox' className='outline-none w-[20px] h-[20px]' onClick={() => { setClick('6') }} />
                    <label className='text-[20px] text-MonoColor-700 font-semibold'>I want a whole car</label>
                </div>
                <div className='text-[12px] text-MonoColor-400 pl-10'>
                    <p>No sharing with other passengers </p>
                    <p>6 passengers max</p>
                </div>
            </div>
            <div className='pt-4'>
                <PurpleButton title='Payment' onClick={() => setIsOpen(true)} />
            </div>
            {/* <ModalNotEnoughPayment open={isOpen} onClose={() => setIsOpen(false)} /> */}
            <ModalPayment open={isOpen} onClose={() => setIsOpen(false)} />

        </div >
    )
}


// รอทำการ link เปลี่ยนสีตามปุ่มที่กด ให้คนเปลี่ยนสี