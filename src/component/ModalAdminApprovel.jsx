import axios from "../config/axios";
import InputAddPlateNumber from "../feature/admin/InputAddPlateNumber";
import ButtonAdminPlateNumber from "../feature/auth/ButtonAdminPlateNumber";
import {createAlert} from "../utils/sweetAlert"

export default function ModalAdminApprovel({ isOpenAddApprovel, setIsOpenAddApprovel,input,setInput, getAllPendingDriver }) {


    const handleSubmitApprovel = async(e)=>{
    try {
        e.preventDefault()
    await axios.post("/admin/create-driver",input)
    getAllPendingDriver()
    createAlert("Success")
    } catch (error) {
        console.log(error)
    }

}

    return (
        <>
            {isOpenAddApprovel && (
                <>
                    <div className=" fixed inset-0 bg-MonoColor-900 opacity-50 z-20"></div>
                    <div className="fixed inset-0 z-30">
                        <div className="flex justify-center items-center min-h-full">
                            <div className='flex flex-col items-center justify-start h-[220px] w-[280px] bg-Primary-dark rounded-3xl gap-4 '>
                                <form className="flex flex-col gap-4 w-full h-full justify-center items-center"
                                onSubmit={handleSubmitApprovel}
                                >
                                    <span className="font-bold text-MonoColor-50 text-center text-[20px]hover:cursor-pointer">Plate Number</span>
                                    <InputAddPlateNumber setInput={setInput} input={input} />

                                    <ButtonAdminPlateNumber title='Confirm' setIsOpenAddApprovel={setIsOpenAddApprovel} />
                                </form>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    )
}