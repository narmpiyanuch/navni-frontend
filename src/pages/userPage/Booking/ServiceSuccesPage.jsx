import purpleLogoNB from '../../../assets/purpleLogoNonbackground.png'
import bathIconGreen from '../../../assets/bathicongreen.png'
import PurpleButton from '../../../feature/payment/PurpleButton'
import { Link } from 'react-router-dom'

export default function ServiceSuccesPage() {
    return (
        <div>
            <div className='flex flex-col m-auto items-center justify-center  h-screen w-screen gap-2'>
                <div className="flex flex-col items-center gap-4">
                    <span className="material-symbols-outlined text-MonoColor-50 text-[32px] bg-OtherColor-lightGreen rounded-full p-2">check</span>
                    <p className="text-[36px] text-OtherColor-lightGreen font-semibold">Thank you</p>
                </div>
                <img src={purpleLogoNB} alt='logo' className='w-[180px]' />
                <div className='flex items-center'>
                    <p className="text-[24px] text-OtherColor-lightGreen font-semibold">Have a good day</p>
                </div>

                <div className='pt-8'>
                    <Link to='/'>
                        <PurpleButton title='Back to Home' />
                    </Link>
                </div>
            </div>
        </div>
    )
}
