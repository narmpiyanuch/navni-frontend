import OrderCustumerOne from "./OrderCustumerOne";


export default function OrderForDriver({ setIsAccept, onClose }) {
  return (
    <>
      <div className=" bg-MonoColor-50 pt-2 flex flex-col gap-2 fixed items-center justify-start bottom-0 w-full max-h-[32vh] drop-shadow-xl overflow-auto">
        <OrderCustumerOne />
        <OrderCustumerOne />
        <OrderCustumerOne />
        <OrderCustumerOne />
        <OrderCustumerOne />
        <OrderCustumerOne />
        <OrderCustumerOne />
        <OrderCustumerOne />
      </div>
    </>
  )
}

