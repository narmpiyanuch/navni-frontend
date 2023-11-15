import purplePerson from "../../../assets/purplePerson.png";

export default function PersonIcon({ children }) {
    return (
        <div className="flex gap-2 justify-center items-center">
            <img src={purplePerson} alt="personIcon" className="w-[32px]" />
            <p className="text-[18px] font-semibold text-Primary-dark pt-2">
                X {children}
            </p>
        </div>
    );
}
