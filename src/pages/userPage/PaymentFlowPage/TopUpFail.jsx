import { Link } from 'react-router-dom'
import purpleLogoNB from '../../../assets/purpleLogoNonbackground.png'
import PurpleButton from '../../../feature/payment/PurpleButton'

export default function TopUpFail() {
    return (
        <div>
            <div className='flex flex-col m-auto items-center justify-center  h-screen w-screen gap-2'>
                <div className="flex flex-col items-center gap-10">
                    <span className="material-symbols-outlined text-MonoColor-50 text-[32px] bg-Error-main rounded-full p-2">close</span>

                    <p className="text-[24px] text-Error-main font-semibold">Fail Top-up</p>
                </div>
                <img src={purpleLogoNB} alt='logo' className='w-[180px]' />

                <div className='pt-8'>
                    <Link to='/home' >
                        <PurpleButton title='Back to Home' />
                    </Link>
                </div>
            </div>

        </div >
    )
}
