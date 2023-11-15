import { useState } from "react";
import ComingToCustomerSmall from "./ComingToCustomerSmall";
import ComingtoCustomerExpand from "./ComingToCustomerExpand";

export default function ComingToCustomer({ setIsPickUp, open, bookingItem }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {open && (
                <>
                    {isOpen ? (
                        <ComingtoCustomerExpand
                            setIsOpen={setIsOpen}
                            setIsPickUp={setIsPickUp}
                            bookingItem={bookingItem}
                        />
                    ) : (
                        <ComingToCustomerSmall
                            setIsOpen={setIsOpen}
                            setIsPickUp={setIsPickUp}
                            bookingItem={bookingItem}
                        />
                    )}
                </>
            )}
        </>
    );
}
