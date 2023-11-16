import ToDestinationSmall from "./ToDestinationSmall";

export default function ToDestination({ setIsSuccess, bookingPickedItem }) {
  return (
    <>
      <div className=" flex flex-col gap-1 fixed items-center justify-start top-[20%] w-full max-h-[28vh] drop-shadow-xl overflow-auto">
        {bookingPickedItem.map((el) => (
          <ToDestinationSmall
            key={el.id}
            setIsSuccess={setIsSuccess}
            bookingItem={el}
          />
        ))}
      </div>
    </>
  );
}
