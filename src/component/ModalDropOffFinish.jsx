import PurpleButton from "../feature/payment/PurpleButton"


export default function ModalDropOffFinish({ open, onClose }) {
    return (
        <>
            {open && <>
                <div className=" fixed inset-0 bg-MonoColor-900 opacity-50 z-20"></div>
                <div className=" fixed inset-0 z-30 ">
                    <div className='flex justify-center items-center min-h-full'>
                        <div className="flex flex-col items-center justify-start h-[320px] w-[280px] bg-MonoColor-50 rounded-3xl gap-4">
                            <button onClick={onClose} className="flex flex-col items-end pr-8 w-full pt-6">
                                <span className="material-symbols-outlined text-MonoColor-400  hover:cursor-pointer" >close</span>
                            </button>
                            <div className="flex flex-col items-center gap-2 py-4">
                                <span className="material-symbols-outlined text-MonoColor-50 text-[32px] bg-OtherColor-lightGreen rounded-full p-2">check</span>
                                <p className="text-[24px] text-OtherColor-lightGreen font-semibold">Drop off successful</p>
                                <p className="text-[18px] text-OtherColor-yellow font-semibold text-center">Thank you for your service</p>
                            </div>
                            <div className='flex '>
                                <PurpleButton onClick={onClose} title='OK' />
                            </div>
                        </div>
                    </div>
                </div>
            </>}
        </>
    )
}
