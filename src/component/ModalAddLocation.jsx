import InputAddPinLocationForm from "../feature/admin/InputAddPinLocationForm";
import PurpleButton from "../feature/payment/PurpleButton";


export default function ModalAddLocation({ open }) {
    return (
        <>
            {open && (
                <div className="flex justify-center items-center">
                    <form className='flex flex-col gap-8  top-0 left-0 right-0 z-10 w-full rounded-3xl h-[320px] justify-center items-center bg-Primary-lightest '>
                        <div className="flex flex-col items-end gap-4 ">
                            <InputAddPinLocationForm title='Name' />
                            <InputAddPinLocationForm title='Latitude' />
                            <InputAddPinLocationForm title='Longitude' />
                            <InputAddPinLocationForm title='Area' />
                        </div>
                        <PurpleButton title='Confirm' />
                    </form>
                </div>)}
        </>
    )
}
