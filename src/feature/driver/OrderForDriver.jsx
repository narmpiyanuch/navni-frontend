import PersonIcon from "./orderForDriver/PersonIcon";
import FareForDriver from "./orderForDriver/FareForDriver";
import Destination from "./orderForDriver/Destination";
import AceptButton from "./orderForDriver/AceptButton";

export default function OrderForDriver({ setIsAccept, onClose, setIsOpen }) {
    return (
        <div className="fixed top-[60%] items-center justify-start pt-6 bg-MonoColor-50 h-full rounded-[20px_20px_0px_0px] drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] w-screen">
            <div className="flex items-center justify-center h-[120px] bg-MonoColor-50 gap-2">
                <div className="flex flex-col relative pr-8">
                    <div className="absolute outline-none top-[-32px] left-[10px] w-[20px] h-[20px] border-4 border-Primary-dark bg-MonoColor-50 rounded-full z-10"></div>
                    <hr className="absolute border-2 border-Primary-dark w-[40px] rotate-90" />
                    <div className="absolute outline-none top-[12px] left-[10px] w-[20px] h-[20px] border-4 border-Primary-dark bg-Primary-dark rounded-full"></div>
                </div>

                <Destination from="BTS Ari exit 4" to="NaNa coffee Ari" />

                <FareForDriver>30</FareForDriver>
            </div>
            <div className=" flex items-center justify-center h-[120px] bg-MonoColor-50 ">
                <div className="flex justify-between items-center w-4/5">
                    <PersonIcon>1</PersonIcon>

                    <div className="flex flex-col gap-2 justify-center items-center">
                        <AceptButton
                            setIsAccept={() => {
                                setIsAccept(true);
                            }}
                            onClose={() => onClose()}
                            setIsOpen={setIsOpen}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
