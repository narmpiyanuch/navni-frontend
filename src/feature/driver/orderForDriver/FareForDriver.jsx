export default function FareForDriver({ children }) {
    return (
        <div className="flex flex-col items-start justify-center gap-6 pr-2">
            <div className="flex flex-col justify-center items-center gap-4">
                <p className="text-[16px] flex font-semibold text-MonoColor-400 bg-transparent">
                    Fare
                </p>
                <p className="text-[16px] flex font-semibold bg-transparent text-Primary-dark ">
                    {children} NP
                </p>
            </div>
        </div>
    );
}
