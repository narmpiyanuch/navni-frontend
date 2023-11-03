import { useState } from "react"
import ComingToCustomerSmall from "./ComingToCustomerSmall"
import ComingtoCustomerExpand from "./ComingToCustomerExpand"

export default function ComingToCustomer({ setIsPickUp, open }) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            {open && (
                <>{isOpen ? (<ComingtoCustomerExpand setIsOpen={setIsOpen} setIsPickUp={setIsPickUp} />) : (<ComingToCustomerSmall setIsOpen={setIsOpen} setIsPickUp={setIsPickUp} />)}
                </>)}
        </>
    )
}
