import { Link } from 'react-router-dom'


export default function MenuBotton({ to, title, icon, active }) {
    return (
        <>
            <button className={`flex gap-6 items-center justify-center border-4 border-Primary-dark w-[240px] h-[80px] rounded-full hover:cursor-pointer hover:bg-Primary-main  active:bg-Primary-light ${active ? 'bg-Primary-dark' : 'bg-none'}`}>
                <Link to={to} className='flex items-center gap-4'>
                    <img src={icon} alt='Icon' className='w-[48px]' />
                    <p className={`text-[24px] font-bold hover:text-MonoColor-50 ${active ? 'text-MonoColor-50' : 'text-Primary-dark'}`}>{title}</p>
                    {/* <p className={`${active ? 'text-blue-600' : 'text-gray-500'}`} >hello</p> */}
                </Link>
            </button>
        </>
    )
}
