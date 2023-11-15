import { useState } from "react"
import ComingToCustomerSmall from "./ComingToCustomerSmall"
import ComingtoCustomerExpand from "./ComingToCustomerExpand"

export default function ComingToCustomer({ setIsPickUp, open }) {

    return (
        <>
            {open &&
                <>
                    <div className=" flex flex-col gap-1 fixed items-center justify-start top-[20%] w-full max-h-[28vh] drop-shadow-xl overflow-auto">
                        <ComingToCustomerSmall setIsPickUp={setIsPickUp} />
                        <ComingToCustomerSmall setIsPickUp={setIsPickUp} />
                        <ComingToCustomerSmall setIsPickUp={setIsPickUp} />
                        <ComingToCustomerSmall setIsPickUp={setIsPickUp} />
                        <ComingToCustomerSmall setIsPickUp={setIsPickUp} />
                        <ComingToCustomerSmall setIsPickUp={setIsPickUp} />
                        <ComingToCustomerSmall setIsPickUp={setIsPickUp} />
                    </div>
                </>
                // (
                //     <>{isOpen ? (<ComingtoCustomerExpand setIsOpen={setIsOpen} setIsPickUp={setIsPickUp} />) : (<ComingToCustomerSmall setIsOpen={setIsOpen} setIsPickUp={setIsPickUp} />)}
                //     </>)


            }
        </>
    )
}
