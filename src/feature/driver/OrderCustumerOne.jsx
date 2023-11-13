import AceptButton from "./orderForDriver/AceptButton";

export default function OrderCustumerOne({ setIsAccept, onClose, setIsOpen }) {
    return (
        <div className="flex flex-col items-center justify-center bg-MonoColor-50 w-[360px] h-[100px] rounded-[40px_40px_40px_40px] px-10">
            <div className="flex items-center justify-between w-full bg-MonoColor-50">
                <div className="flex flex-col items-start justify-center w-[240px] h-[100px] gap-2">
                    <div className="flex gap-4">
                        <p className="text-[16px] flex font-semibold text-MonoColor-400 bg-transparent">
                            From
                        </p>
                        <p className="text-[16px] flex font-semibold bg-transparent text-MonoColor-700 ">
                            BTS Ari exit 4
                        </p>
                    </div>
                    <div className="flex gap-4">
                        <p className="text-[16px] flex font-semibold text-MonoColor-400 bg-transparent">
                            To
                        </p>
                        <p className="text-[16px] flex font-semibold bg-transparent text-MonoColor-700 ">
                            NaNa coffee Ari
                        </p>
                    </div>
                </div>
                <div className="flex justify-center items-center ">
                    <AceptButton
                        setIsAccept={setIsAccept}
                        onClose={onClose}
                        setIsOpen={setIsOpen}
                    />
                </div>
            </div>
        </div>
    );
}
