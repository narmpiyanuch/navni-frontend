import { Link } from "react-router-dom";
import line from '../../assets/line.png';
import instagram from '../../assets/instagram.png';
import facebook from '../../assets/facebook.png'


const contact = [
    { id: 1, title: 'Recruite', data: 'telent@navni.co' },
    { id: 2, title: 'Support', data: 'support@navni.co' },
    { id: 3, title: 'Press', data: 'tmarketing@navni.co' },
    { id: 4, title: 'Tel.', data: '+66987654321' },
]

export default function InformationPage() {
    return (
        <div>
            <div className='flex flex-col m-auto items-center justify-start  h-screen w-screen gap-2'>
                <button className=' flex flex-col pt-10 items-start w-full '>
                    <Link to='/'>
                        <span class="material-symbols-outlined text-Primary-dark  font-bold text-[32px] active:text-MonoColor-300 pl-4"> navigate_before</span>
                    </Link>
                </button>
                <div className='flex items-center'>
                    <p className='text-Primary-dark text-[24px] font-normal item-center'>Information</p>
                </div>
                <div className='flex flex-col gap-4 pt-8'>
                    <p className='text-[18px] text-MonoColor-400 '>Service Hours</p>
                    <div className="flex gap-4 pl-4">
                        <p className='text-[16px] text-MonoColor-700 '>Monday to Sunday</p>
                        <p className='text-[18px] text-Primary-main '>06:00 - 22:00</p>
                    </div>
                </div>
                <div className='flex flex-col gap-4 pt-8'>
                    <p className='text-[18px] text-MonoColor-400'>Contact Us</p>
                    {contact.map(el => <div key={el.id} className="flex gap-4 pl-4">
                        <p className='text-[16px] text-MonoColor-700'>{el.title}</p>
                        <p className='text-[18px] text-Primary-main'>{el.data}</p>
                    </div>)}
                    <div className="flex gap-4 pl-4">
                        <p className='text-[16px] text-MonoColor-700 '>Follow Us</p>
                        <div className="flex gap-2">
                            <img src={line} alt='line' className="w-[20px] h-[20px]" />
                            <img src={instagram} alt='instagram' className="w-[20px] h-[20px]" />
                            <img src={facebook} alt='facebook' className="w-[20px] h-[20px]" />
                        </div>
                    </div>
                </div>
            </div >
        </div>
    )
}
