import whiteLogo from '../assets/whiteLogo.png'
import ButtonByGoogle from '../feature/auth/BottonByGoogle'
import ButtonInputForm from '../feature/auth/ButtonInputForm'
import FooterForHome from '../feature/auth/FooterForHome'
import InputLoginForm from '../feature/auth/InputLoginForm'


const labelInput = [
    { id: 1, title: 'Email' },
    { id: 2, title: 'Password' }
]

export default function LoginPage() {
    return (
        <div className='flex flex-col m-auto items-center justify-center bg-Primary-main h-screen w-screen gap-2'>
            <div className='flex flex-col fixed bottom-[40%] items-center '>
                <div className=' relative flex flex-col items-center  '>
                    <img src={whiteLogo} alt='whitLogo' className='w-[240px]' />
                    <p className='text-MonoColor-50 font-bold text-[20px] absolute top-[220px]'>Welcome! to Navni</p>
                </div>
                <form className='flex flex-col items-center gap-4 pt-8'>
                    <div className='flex flex-col gap-4 items-end'>
                        {labelInput.map((el) => <InputLoginForm key={el.id} title={el.title} />
                        )}
                    </div>
                    <ButtonInputForm title='Log In' />
                </form>
                <p className='text-MonoColor-50 text-[12px] py-2'>OR</p>
                <ButtonByGoogle title='Sign in with google' />
            </div>
            <div className='fixed top-[64%] items-center justify-start pt-6 bg-MonoColor-50 h-full w-screen rounded-[40px_40px_0px_0px] mt-8'>
                <FooterForHome />
            </div>
        </div>
    )
}
