import { Link } from 'react-router-dom'
import user from '../../assets/user.png'
import ButtonInputForm from '../../feature/auth/ButtonInputForm'
import InputRegisterDriverAll from '../../feature/driver/InputRegisterDriverAll'


export default function RegisterDriverPage() {
    return (
        <div className="flex flex-col m-auto items-center justify-start  bg-Primary-main h-screen w-screen gap-2">
            <div className=' flex flex-col pt-10 items-start w-full '>
                <botton className="material-symbols-outlined text-Primary-dark  font-bold text-[32px] active:text-MonoColor-300 pl-4">
                    <Link to='/login'>
                        navigate_before
                    </Link>
                </botton>
            </div>
            <div className="flex flex-col items-center pt-4  ">
                <p className="text-MonoColor-50 font-bold text-[20px] ">Join Us!</p>
                <p className="text-MonoColor-50 font-bold text-[20px] ">Welcome! to Navni Teamy</p>
            </div>
            <div className=" fixed top-[28%] items-center justify-start pt-6 bg-MonoColor-50 h-full w-screen rounded-[40px_40px_0px_0px] mt-8">
                <form className='flex flex-col justify-center items-center w-full'>
                    <img src={user} alt='user' className='absolute border-4 rounded-full bg-MonoColor-50 border-MonoColor-50 w-[132px] top-[-80px] ' />
                    <div className='flex pt-12'>
                        <InputRegisterDriverAll />
                    </div>
                    <div className='flex pt-8'>
                        <ButtonInputForm title='Join Us' />
                        {/* ***เชื่อมกับ swal  */}
                    </div>
                </form>
            </div >
        </div >
    )
}
