import socket from "../../../config/socket";
import useBooking from "../../hook/use-booking";
import useDriver from "../../hook/use-driver";

export default function AceptButton({ setIsAccept, onClose, setIsOpen, el }) {
  const {
    fetchProfile,
    acceptBookingForDriver,
    getAcceptBookingItemForDriver,
    getPickedBookingItemForDriver,
  } = useDriver();
  const { getBookingItemForDriver } = useBooking();

  socket.on("test2", (test) => {
    console.log(test);
    setIsOpen(test);
  });

  const handleAcceptBooking = async (e) => {
    try {
      e.preventDefault();
      await acceptBookingForDriver(el.id);
      await fetchProfile();
      setIsAccept(true);
      onClose();
      socket.emit("accept_requestBooking");
    } catch (error) {
      console.log(error);
    } finally {
      await getAcceptBookingItemForDriver();
      await getBookingItemForDriver();
      await getPickedBookingItemForDriver();
    }
  };

  return (
    <button
      onClick={(e) => {
        handleAcceptBooking(e);
      }}
      className="w-[100px] py-4 bg-OtherColor-darkGreen text-MonoColor-50 rounded-xl text-[14px] active:bg-OtherColor-lightGreen active:text-MonoColor-700"
    >
      <p className="text-[20px] font-semibold">Accept</p>
      <div className="flex justify-center items-center">
        <span className="material-symbols-outlined">man</span>
        <p className="text-[18px] w- font-semibold text-MonoColor-50">
          x {el.passenger}
        </p>
      </div>
    </button>
  );
}
