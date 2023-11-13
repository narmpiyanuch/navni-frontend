export default function ModalPayment({ open, onClose }) {
    return (
        <>
            {open && (
                <>
                    <div className=" fixed inset-0 bg-MonoColor-900 opacity-50 z-20"></div>
                    <div className=" fixed inset-0 z-30 ">
                        <div className="flex justify-center items-center min-h-full">
                            <div className="flex flex-col items-center justify-start h-[320px] w-[280px] bg-MonoColor-50 rounded-3xl gap-4">
                                <div className="flex flex-col items-end pr-8 w-full pt-6">
                                    <span
                                        className="material-symbols-outlined text-MonoColor-400  hover:cursor-pointer"
                                        onClick={onClose}
                                    >
                                        close
                                    </span>
                                </div>
                                <div className="flex w-full pl-8">
                                    <p className="text-[18px] font-semibold text-MonoColor-400">
                                        Payment
                                    </p>
                                </div>
                                <div className="flex gap-4 p-2">
                                    <div className="flex flex-col items-center justify-center gap-4 bg-Primary-main w-[180px] h-[96px] rounded-2xl">
                                        <div className="flex flex-col justify-center items-center">
                                            <p className="text-[12px] text-MonoColor-50 ">
                                                My wallet
                                            </p>
                                            <p className="text-[24px] text-MonoColor-50 font-semibold">
                                                37 NP
                                            </p>
                                            <p className="text-[12px] text-MonoColor-50">
                                                Balance 100 NP
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <button className="bg-Primary-dark rounded-3xl text-MonoColor-50 py-2 px-4 text-[16px] font-normal  active:text-MonoColor-600 active:bg-Primary-light">
                                    Request a car
                                </button>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    );
}
