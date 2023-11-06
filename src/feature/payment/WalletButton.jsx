export default function WalletButton({ title }) {
    return (
        <button className="bg-Primary-dark rounded-2xl text-MonoColor-100 py-3 px-10 text-[36px] font-normal text-center flex gap-4 justify-center items-center min-w-full">
            {title}
            <div className="bg-MonoColor-100 w-9 h-9 rounded-full text-Primary-dark flex items-center justify-center">
                +
            </div>
        </button>
    );
}
