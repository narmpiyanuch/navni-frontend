import chat from '../../assets/speak.png'
import driver from '../../assets/driver.png'
import pinLocation from '../../assets/map.png'

export default function FooterAdminPage() {
    return (
        <footer className='flex fixed gap-10 justify-center w-full items-end bottom-28'>
            <button className='flex gap-6 items-center justify-center border-4 border-Primary-dark w-[240px] h-[80px] rounded-full active:bg-Primary-dark hover:cursor-pointer hover:bg-Primary-light'>
                <img src={chat} alt='chatIcon' className='w-[48px]' />
                <p className='text-[24px] font-bold text-Primary-dark active:text-MonoColor-50'>Live Chat</p>
            </button>
            <button className='flex gap-6 items-center justify-center border-4 border-Primary-dark w-[240px] h-[80px] rounded-full active:bg-Primary-dark hover:cursor-pointer hover:bg-Primary-light'>
                <img src={driver} alt='driverIcon' className='w-[48px]' />
                <p className='text-[24px] font-bold text-Primary-dark active:text-MonoColor-50'>All Driver</p>
            </button>
            <button className='flex gap-6 items-center justify-center border-4 border-Primary-dark w-[240px] h-[80px] rounded-full active:bg-Primary-dark hover:cursor-pointer hover:bg-Primary-light'>
                <img src={pinLocation} alt='pinIcon' className='w-[48px]' />
                <p className='text-[24px] font-bold text-Primary-dark active:text-MonoColor-50'>Location</p>
            </button>
        </footer>
    )
}
