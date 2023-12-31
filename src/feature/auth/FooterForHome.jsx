import { Link } from "react-router-dom";

export default function FooterForHome() {
  return (
    <div className="flex flex-col items-center justify-start gap-2">
      <button className="text-MonoColor-50 text-[18px] font-semibold bg-Secondary-dark py-1 w-[200px] rounded-3xl drop-shadow-lg active:text-MonoColor-400">
        <Link to="/register/registerUser">Register Member</Link>
      </button>
      <p className="text-MonoColor-400 text-[18px]">or be a part of us</p>
      <button className="text-MonoColor-50 text-[18px] font-semibold bg-Primary-light py-1 w-[200px] rounded-3xl drop-shadow-lg active:text-MonoColor-400">
        <Link to="/register/registerdriver">Register Driver</Link>
      </button>
    </div>
  );
}
