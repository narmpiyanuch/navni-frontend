import OrderCustumerOne from "./OrderCustumerOne";

export default function OrderForDriver({ setIsAccept, onClose, setIsOpen }) {
    return (
        <>
            <div className="flex flex-col gap-2 fixed items-center justify-start bottom-0 w-full max-h-[40vh] overflow-auto">
                <OrderCustumerOne
                    setIsAccept={setIsAccept}
                    onClose={onClose}
                    setIsOpen={setIsOpen}
                />
                <OrderCustumerOne
                    setIsAccept={setIsAccept}
                    onClose={onClose}
                    setIsOpen={setIsOpen}
                />
                <OrderCustumerOne
                    setIsAccept={setIsAccept}
                    onClose={onClose}
                    setIsOpen={setIsOpen}
                />
                <OrderCustumerOne
                    setIsAccept={setIsAccept}
                    onClose={onClose}
                    setIsOpen={setIsOpen}
                />
            </div>
        </>
    );
}
