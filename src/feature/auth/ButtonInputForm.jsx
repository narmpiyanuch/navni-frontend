export default function ButtonInputForm({ title }) {
    return (
        <button className="bg-Primary-dark rounded-2xl text-MonoColor-50 py-1 px-4 text-[18px] font-normal drop-shadow-lg active:text-MonoColor-400">
            {title}
        </button>
    );
}
