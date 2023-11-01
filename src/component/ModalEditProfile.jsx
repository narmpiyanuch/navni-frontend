import InputEditForm from "../feature/auth/InputEditForm ";
import PurpleButton from '../feature/payment/PurpleButton'


export default function ModalEditProfile({ open, onClose }) {
    return (
        <>
            {open && (<>
                <div className=" fixed inset-0 bg-MonoColor-900 opacity-50 z-20"></div>
                <div className=" fixed inset-0 z-30 ">
                    <div className='flex justify-center items-center min-h-full'>
                        <div className="flex flex-col items-center justify-start h-[320px] w-[280px] bg-MonoColor-50 rounded-3xl gap-4">
                            <div className="flex flex-col items-end pr-8 w-full pt-6">
                                <span className="material-symbols-outlined text-MonoColor-400  hover:cursor-pointer" onClick={onClose}>close</span>
                            </div>
                            <form className="flex flex-col justify-center gap-4">
                                <div className="flex flex-col gap-4 justify-end items-end pr-[16px] pt-4 w-full">
                                    <InputEditForm title='Fist name' />
                                    <InputEditForm title='Last name' />
                                    <InputEditForm title='Tel.' />
                                </div>
                                <div className="flex justify-center pt-6">
                                    <PurpleButton title='Confirm edit' />
                                    {/* link กับหลังบ้านแล้วใช้ swal2 ถ้าไม่errorหลังแก้ข้อมูล */}
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </>)}
        </>
    )
}
