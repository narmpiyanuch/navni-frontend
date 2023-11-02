
import HeaderDiver from '../../feature/diver/HeaderDiver'
import WaitingOrder from '../../feature/diver/WaitingOrder'
import OrderForDiver from '../../feature/diver/OrderForDiver'
import ComingToCustomer from '../../feature/diver/ComingToCustomer'
import ModalAlreadyPickUp from '../../component/ModalAlreadyPickUp'
import { useState } from 'react'
import ToDestination from '../../feature/diver/ToDestination'
import ModalDropOffFinish from '../../component/ModalDropOffFinish'
import ModalCancelTrip from '../../component/ModalCancelTrip'




export default function StartDiverPage() {
    const [isPickUp, setIsPickUp] = useState(false) //ModalAlreadyPickup
    const [isAccept, setIsAccept] = useState(false) //ComingToCustomer
    const [isClose, setIsClose] = useState(true) //oderForDiver
    const [isOpenDestination, setOpenDetination] = useState(false)//ToDestination
    const [isSuccess, setIsSuccess] = useState(false)//modalDropoffFinish
    const [isCancelTrip, setIsCancelTrip] = useState(false)

    return (
        <div className="flex flex-col m-auto items-center justify-center h-screen w-screen gap-2">
            <HeaderDiver />

            {/* <WaitingOrder /> */}

            {isClose && (<OrderForDiver setIsAccept={setIsAccept} onClose={() => setIsClose(false)} />)}

            <ComingToCustomer setIsPickUp={setIsPickUp} open={isAccept} />
            {/* กล่องข้างบนสามารถวนใช้ได้ */}

            <ModalAlreadyPickUp open={isPickUp} onCloseAll={() => {
                setIsAccept(false)
                setIsPickUp(false)
                setOpenDetination(true)
            }}
            />
            {isOpenDestination && (<ToDestination setIsSuccess={setIsSuccess} setIsCancelTrip={setIsCancelTrip} />)}
            <ModalDropOffFinish open={isSuccess} onClose={() => {
                setOpenDetination(false)
                setIsSuccess(false)
            }} />
            <ModalCancelTrip to='/homediver' open={isCancelTrip} onClose={() => { setIsCancelTrip(false) }} />
        </div>
    )
}
