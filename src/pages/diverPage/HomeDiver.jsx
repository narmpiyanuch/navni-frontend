import user from '../../assets/user.png'
import tuktuk from '../../assets/tuktuk.png'
import calendar from '../../assets/calendar.png'
import messageChat from '../../assets/chat.png'
import { Link } from 'react-router-dom'
import { useAuth } from "../../feature/hook/use-auth";
import purpleLogo from '../../assets/purpleLogoNonbackground.png'


export default function HomeDiver() {
    const { logout } = useAuth();

    const handleLogOut = () => {
        logout();
    };
    return (
        <div className="flex flex-col m-auto items-center justify-center h-screen w-screen gap-2">

            <div className="flex fixed top-0 flex-col items-center justify-start bg-Primary-main w-screen h-[180px] rounded-[0px_0px_40px_40px]">
                <div className="flex fixed gap-4 top-[10%] items-center">
                    <img
                        src={user}
                        className="rounded-full aspect-square w-[60px] border-4 border-MonoColor-50 bg-MonoColor-50 drop-shadow-lg"
                    />
                    <div className=" flex-shrink">
                        <div className="flex justify-between items-center">
                            <p className="text-[18px] text-MonoColor-50">
                                Hello (First name)
                            </p>
                        </div>
                        <hr className="w-[240px] border-[1.5px] rounded-xl" />
                        <div className="flex justify-between item-center">
                            <div className="flex gap-2 items-center">
                                <span className="material-symbols-outlined text-MonoColor-50 font-thin text-[18px]">
                                    mail
                                </span>
                                <p className="text-[14px] text-MonoColor-50">asdfh@gmail.com</p>
                            </div>
                            <span
                                className="material-symbols-outlined text-MonoColor-50 font-thin text-[16px] pt-2"
                                onClick={handleLogOut}
                            >
                                logout
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-col items-center justify-center pt-16'>
                <img src={purpleLogo} alt='logo' className='w-[180px]' />
                <p className='text-Primary-dark text-[20px] font-bold'>Have a good day</p>
            </div>
            <div>
                <div className='flex  flex-col items-center justify-center pt-12 gap-10'>
                    <button className='flex flex-col justify-center items-center relative w-[320px] h-[80px] rounded-3xl bg-Primary-light active:bg-Primary-main'>
                        <Link to='/startdive' className='flex justify-center'>
                            <div className='flex justify-center items-center w-[64px] h-[64px] bg-MonoColor-50 rounded-full absolute top-[-30px]  border-4 border-Primary-light'>
                                <img src={tuktuk} alt='tuktuk' className='w-[40px]' />
                            </div>
                            <p className='text-MonoColor-50 text-[20px] font-semibold pt-4'>Start to dive</p>
                        </Link>
                    </button>
                    <button className='flex flex-col justify-center items-center relative w-[320px] h-[80px] rounded-3xl bg-Primary-light active:bg-Primary-main'>
                        <Link to='/servicehistory' className='flex justify-center'>
                            <div className='flex justify-center items-center w-[64px] h-[64px] bg-MonoColor-50 rounded-full absolute top-[-30px]  border-4 border-Primary-light'>
                                <img src={calendar} alt='tuktuk' className='w-[40px]' />
                            </div>
                            <p className='text-MonoColor-50 text-[20px] font-semibold pt-4'>History</p>
                        </Link>
                    </button>
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
            <div className="fixed top-[88%] items-center justify-start pt-6 bg-Primary-main h-full w-screen rounded-[40px_40px_0px_0px] mt-8">
            </div>
        </div >
    )
}
