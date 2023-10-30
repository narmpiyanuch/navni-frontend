import whiteLogo from '../../assets/whiteLogo.png'
import InputRegisterForm from '../../feature/auth/InputRegisterForm'
import ButtonInputForm from '../../feature/auth/ButtonInputForm'
import ButtonByGoogle from '../../feature/auth/BottonByGoogle'

const labelInput = [
    { id: 1, title: 'First name' },
    { id: 2, title: 'Last name' },
    { id: 3, title: 'Tel.' },
    { id: 4, title: 'Email' },
    { id: 5, title: 'Password' },
    { id: 6, title: 'Password confirm' },
]

export default function RegisterPageForUser() {
    return (
        <div className='flex flex-col m-auto items-center justify-center fixed bottom-[36%] bg-Primary-main h-screen w-screen gap-2'>
            <div className=' relative flex flex-col items-center  '>
                <img src={whiteLogo} alt='whitLogo' className='w-[240px]' />
                <p className='text-MonoColor-50 font-bold text-[18px] absolute top-[220px]'>Welcome! to Navni Family</p>
            </div>
            <div className='fixed top-[30%] items-center justify-start pt-6 bg-MonoColor-50 h-full w-screen rounded-[40px_40px_0px_0px] mt-8'>
                <form className='flex flex-col items-center gap-4 pt-8'>
                    <div className='flex flex-col gap-4 items-end'>
                        {labelInput.map((el) => <InputRegisterForm key={el.id} title={el.title} />
                        )}
                    </div>
                    <ButtonInputForm title='Sign Up' />
                </form>
                <div className='flex flex-col items-center'>
                    <p className='text-Primary-dark text-[12px] py-2'>OR</p>
                    <ButtonByGoogle title='Sign up with google' />
                </div>
            </div>

        </div>
    )
}
