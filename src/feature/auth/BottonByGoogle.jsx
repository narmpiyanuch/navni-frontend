import google from "../../assets/google.png";

export default function BottonByGoogle({ title }) {
  return (
    <button className="flex items-center bg-MonoColor-50 rounded-2xl w-[280px] gap-10 drop-shadow-xl  active:text-MonoColor-400">
      <img src={google} alt="googleLogin" className="w-[36px]" />
      <span className="text-[16px] font-normal">{title}</span>
    </button>
  );
}
