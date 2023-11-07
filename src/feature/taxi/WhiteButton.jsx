

export default function WhiteButton({ title,onClick }) {
    return (
        <button onClick={onClick} className='bg-MonoColor-50 rounded-2xl border-2 border-Primary-dark text-Primary-dark w-[160px] h-[36px] text-[14px] font-normal  active:text-MonoColor-600 active:bg-Primary-light'>{title}</button>
    )
}
