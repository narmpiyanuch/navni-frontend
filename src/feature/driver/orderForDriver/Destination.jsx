export default function Destination({ from, to }) {
    return (
        <div className="flex flex-col items-start justify-center  w-[240px] h-[100px]  gap-6">
            <div className="flex gap-4">
                <p className="text-[16px] flex font-semibold text-MonoColor-400 bg-transparent">
                    From
                </p>
                <p className="text-[16px] flex font-semibold bg-transparent text-MonoColor-700 ">
                    {from}
                </p>
            </div>
            <div className="flex gap-4">
                <p className="text-[16px] flex font-semibold text-MonoColor-400 bg-transparent">
                    To
                </p>
                <p className="text-[16px] flex font-semibold bg-transparent text-MonoColor-700 ">
                    {to}
                </p>
            </div>
        </div>
    );
}
