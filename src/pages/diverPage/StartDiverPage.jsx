
import HeaderDiver from '../../feature/diver/HeaderDiver'
import WaitingOrder from '../../feature/diver/WaitingOrder'
import OrderForDiver from '../../feature/diver/OrderForDiver'
import purplePerson from '../../assets/purplePerson.png'
import ComingToCustomerExpand from '../../feature/diver/ComingToCustomerExpand.jsx'
import ComingToCustomerSmall from '../../feature/diver/ComingToCustomerSmall'
import ComingToCustomer from '../../feature/diver/ComingToCustomer'
import ModalAlreadyPickUp from '../../component/ModalAlreadyPickUp'
import { useState } from 'react'



export default function StartDiverPage() {
    const [isPickUp, setIsPickUp] = useState(false)
    const [isAccept, setIsAccept] = useState(false)
    const [isClose, setIsClose] = useState(true)

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
            }}
            />
        </div>
    )
}
