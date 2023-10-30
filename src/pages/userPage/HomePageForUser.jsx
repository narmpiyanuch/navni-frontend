import wallet from '../../assets/wallet.png'
import tuktuk from '../../assets/tuktuk.png'
import calendar from '../../assets/calendar.png'
import information from '../../assets/support.png'
import messageChat from '../../assets/chat.png'
import navniLogo from '../../assets/purpleLogo.png'

export default function HomePageForUser() {
    return (
        <div className='flex flex-col m-auto items-center justify-center bg-Primary-main h-screen w-screen gap-2'>
            <div className='flex flex-col fixed bottom-[54%] items-center '>
                <div className='flex gap-4 items-center'>
                    <img src={navniLogo} className='rounded-full aspect-square w-[60px] border-4 border-Primary-darker drop-shadow-lg' />
                    <div className=' flex-shrink'>
                        <div className='flex justify-between items-center'>
                            <p className='text-[18px] text-MonoColor-50'>Hello (First name)</p>
                            <button className='text-[12px] text-OtherColor-yellow active:text-MonoColor-300'>Edit Profile</button>
                        </div>
                        <hr className='w-[240px] border-[1.5px] rounded-xl' />
                        <div className='flex justify-between item-center'>
                            <div className='flex gap-2 items-center'>
                                <span className="material-symbols-outlined text-MonoColor-50 font-thin text-[18px]">mail</span>
                                <p className='text-[14px] text-MonoColor-50'>asdfh@gmail.com</p>
                            </div>
                            <span className="material-symbols-outlined text-MonoColor-50 font-thin text-[16px] pt-2">logout</span>
                        </div>
                    </div>
                </div>
                <div className='pt-[20px]'>
                    <div className='w-[200px] h-[200px] bg-MonoColor-50 rounded-full relative overflow-hidden flex flex-col items-center justify-start '>
                        <div className='flex flex-col justify-center items-center gap-2 pt-[20%]'>
                            <div className='flex relative'>
                                <div className='w-[60px] h-[16px] rounded-full bg-MonoColor-300 absolute bottom-[-6px] left-[-8px]'></div>
                                <img src={wallet} alt='wallet' className='w-[48px] z-10' />
                            </div>
                            <div className='flex gap-4 items-center'>
                                <p className='text-MonoColor-700 text-[26px] font-semibold'>100</p>
                                <p className='text-MonoColor-700 text-[26px] font-normal'>NP</p>
                            </div>
                        </div>
                        <div className='flex items-center justify-center'>
                            <div className='w-[200px] h-[60px] absolute bg-Secondary-lightest bottom-0 '></div>
                            <button className='w-[28px] h-[28px] rounded-full absolute bg-MonoColor-50 bottom-[16px] text-center text-Primary-dark font-semibold text-[20px] active:bg-Primary-main'>+</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='fixed top-[42%] items-center justify-start pt-6 bg-MonoColor-50 h-full w-screen rounded-[40px_40px_0px_0px] mt-[60px]'>
                <div className='flex items-center justify-center pt-4'>
                    <div className='flex  items-center bg-Primary-dark w-[320px] h-[88px] rounded-3xl gap-10 pl-6 active:bg-Primary-main'>
                        <div className='flex justify-center items-center w-[64px] h-[64px] bg-Secondary-lightest rounded-full'>
                            <img src={tuktuk} alt='tuktuk' className='w-[40px]' />
                        </div>
                        <p className='text-MonoColor-50 text-[20px] font-semibold'>Tuk Tuk TAXI</p>
                    </div>
                </div>
                <div className='flex gap-10 items-center justify-center mt-10'>
                    <div className='flex flex-col justify-center items-center relative w-[132px] h-[100px] rounded-3xl bg-Primary-light active:bg-Primary-main'>
                        <div className='flex justify-center items-center w-[64px] h-[64px] bg-MonoColor-50 rounded-full absolute top-[-30px] border-4  border-Primary-light'>
                            <img src={calendar} alt='tuktuk' className='w-[40px]' />
                        </div>
                        <p className='text-MonoColor-50 text-[20px] font-semibold pt-4'>History</p>
                    </div>
                    <div className='flex flex-col justify-center items-center relative w-[132px] h-[100px] rounded-3xl bg-Primary-light active:bg-Primary-main'>
                        <div className='flex justify-center items-center w-[64px] h-[64px] bg-MonoColor-50 rounded-full absolute top-[-30px] border-4  border-Primary-light'>
                            <img src={information} alt='tuktuk' className='w-[40px]' />
                        </div>
                        <p className='text-MonoColor-50 text-[20px] font-semibold pt-4'>Information</p>
                    </div>
                </div>
                <div className='flex gap-10 items-center justify-center mt-8'>
                    <div className='flex flex-col justify-center items-center relative w-[320px] h-[40px] rounded-3xl bg-Secondary-main active:bg-Secondary-dark'>
                        <div className='flex justify-center items-center w-[64px] h-[64px] bg-MonoColor-50 rounded-full absolute left-0 border-4  border-Secondary-main'>
                            <img src={messageChat} alt='tuktuk' className='w-[40px]' />
                        </div>
                        <p className='text-MonoColor-50 text-[20px] font-semibold'>Live Chat</p>
                    </div>
                </div>
            </div>
        </div >
    )
}
