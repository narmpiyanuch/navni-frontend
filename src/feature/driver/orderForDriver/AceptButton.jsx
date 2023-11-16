import Countdown from "react-countdown";
import socket from "../../../config/socket";
import useDriver from "../../hook/use-driver";

export default function AceptButton({ setIsAccept, onClose, setIsOpen, el }) {
  const { acceptBookingForDriver } = useDriver();

  // const testSocket = () => {
  //     socket.emit("test", false);
  // };

  socket.on("test2", (test) => {
    console.log(test);
    setIsOpen(test);
  });

  const renderer = ({ seconds, completed }) => {
    if (completed) {
      return onClose();
    } else {
      return <span>{seconds}s</span>;
    }
  };

  const handleAcceptBooking = async (e) => {
    try {
      e.preventDefault();
      acceptBookingForDriver(el.id);
      setIsAccept(true);
      onClose();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <button
      onClick={(e) => {
        handleAcceptBooking(e);
      }}
      className="w-[100px] py-4 bg-OtherColor-darkGreen text-MonoColor-50 rounded-xl text-[14px] active:bg-OtherColor-lightGreen active:text-MonoColor-700"
    >
      <p className="text-[20px] font-semibold">
        <Countdown date={Date.now() + 45000} renderer={renderer} />
      </p>
      <div className="flex justify-center items-center">
        <span className="material-symbols-outlined">man</span>
        <p className="text-[18px] w- font-semibold text-MonoColor-50">
          x {el.passenger}
        </p>
      </div>
    </button>
  );
}
