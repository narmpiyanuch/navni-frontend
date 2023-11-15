import purpleLogo from '../../assets/purpleLogoNonbackground.png'
import { useAuth } from '../hook/use-auth';

export default function HeaderAdminPage() {
    const { logout } = useAuth();
    const handleLogOut = () => {
        logout();
    };

    return (
        <header className='w-full h-80px flex justify-around items-center pt-4'>
            <div>
                <img src={purpleLogo} alt='logo' className='w-[72px] h-[72px]' />
            </div>
            <div>
                <p className='text-[32px] text-Primary-dark'>Navni Admin control center</p>
            </div>
            <div className='flex gap-4 items-center justify-center'>
                <div className='py-1.5 px-4 border-2 border-Primary-dark rounded-2xl'>
                    <p className='text-Primary-dark '>Admin</p>
                </div>
                <button
                    type='submit'
                    onClick={handleLogOut}
                    className="material-symbols-outlined text-[32px] text-Primary-dark">
                    logout
                </button>
            </div>
        </header>
    )
}
