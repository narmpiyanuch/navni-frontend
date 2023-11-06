import InputAddPinLocationForm from "../feature/admin/InputAddPinLocationForm";
import PurpleButton from "../feature/payment/PurpleButton";

export default function ModalEditPinLocation({ setIsLocationModal, setIsOpenEditLocation, open }) {
    return (
        <>
            {open && (
                <div className="flex flex-col justify-center items-center">
                    <div className=" w-full">
                        <botton
                            onClick={() => {
                                setIsLocationModal(true)
                                setIsOpenEditLocation(false)
                            }}
                            className="material-symbols-outlined text-Primary-dark" >arrow_back_ios</botton>
                        <p className="flex justify-center text-[24px] pb-4 font-semibold text-Primary-dark">Edit pin location</p>
                    </div>
                    <form className='flex flex-col gap-8  top-0 left-0 right-0 w-full rounded-3xl h-[320px] justify-center items-center bg-Primary-lightest '>
                        <div className="flex flex-col items-end gap-4 ">
                            <InputAddPinLocationForm title='Name' />
                            <InputAddPinLocationForm title='Latitude' />
                            <InputAddPinLocationForm title='Longitude' />
                            <InputAddPinLocationForm title='Area' />
                        </div>
                        <PurpleButton title='Confirm edit' />
                    </form>
                </div>)}
        </>
    )
}
