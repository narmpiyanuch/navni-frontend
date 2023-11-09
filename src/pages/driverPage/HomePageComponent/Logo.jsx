import purpleLogo from "../../../assets/purpleLogoNonbackground.png";

export default function Logo() {
  return (
    <div className="flex flex-col items-center justify-center pt-16">
      <img src={purpleLogo} alt="logo" className="w-[180px]" />
      <p className="text-Primary-dark text-[20px] font-bold">Have a good day</p>
    </div>
  );
}
