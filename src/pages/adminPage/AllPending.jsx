import { useState } from 'react'
import ModalAdminApprovel from "../../component/ModalAdminApprovel"
import ButtonAdminApprovel from "../../feature/auth/ButtonAdminApprovel";
import ButtonAdminReject from '../../feature/auth/ButtonAminReject';


export default function AllPending({ firstName, lastName, idcard, gender, tel, email, id, getAllPendingDriver, image }) {
    const [isOpenAddApprovel, setIsOpenAddApprovel] = useState(false)

    const [input, setInput] = useState({
        id,
        plateNumber: ""
    })

    return (
        <>
            <br />
            <div className="flex py-10 gap-4 px-10 border border-Primary-dark bg-Primary-lightest rounded-3xl justify-center items-center relative" >

                {image ? <img src={image} className="aspect-square rounded-full object-cover w-[100px]" /> : <img src="./src/assets/user2.png" className="w-20 h-20" />}

                <div className="flex flex-col-2 gap-6 pb-2">
                    <div>
                        <div className="flex gap-4">
                            <p className="text-Primary-darker text-16px font-bold">Fist name</p>
                            <p>{firstName}</p>
                        </div>

                        <div className="flex gap-9">
                            <p className="text-Primary-darker text-16px font-bold">ID card</p>
                            <p>{idcard}</p>
                        </div>

                        <div className="flex gap-9">
                            <p className="text-Primary-darker text-16px font-bold">Gender</p>
                            <p>{gender}</p>
                        </div>

                        <div className="flex gap-12">
                            <p className="text-Primary-darker text-16px font-bold">Email</p>
                            <p>{email}</p>
                        </div>
                    </div>

                    <div>
                        <div className="flex gap-11">
                            <p className="text-Primary-darker text-16px font-bold">Last name</p>
                            <p>{lastName}</p>
                        </div>

                        <div className="flex gap-24">
                            <p className="text-Primary-darker text-16px font-bold">Tel.</p>
                            <p>{tel}</p>
                        </div>


                    </div>
                </div>

                <div className="flex gap-4 absolute bottom-4 right-10">
                    <ModalAdminApprovel
                        isOpenAddApprovel={isOpenAddApprovel}
                        setIsOpenAddApprovel={setIsOpenAddApprovel}
                        input={input}
                        setInput={setInput}
                        id={input.id}
                        getAllPendingDriver={getAllPendingDriver}
                    />
                </div>

                <div className='flex absolute bottom-4 right-10 gap-4'>
                    <ButtonAdminApprovel
                        onClick={() => setIsOpenAddApprovel(true)}
                        title="Approvel" />

                    <ButtonAdminReject title="Reject" />
                </div>

            </div>
        </>
    )
}
