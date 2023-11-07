import { Link } from "react-router-dom";
import HistoryForm from "../../feature/taxi/HistoryForm";

export default function ServiceHistory() {
  return (
    <div>
      <div className="flex flex-col m-auto items-center justify-start  h-screen w-screen gap-2">
        <div className=" flex flex-col pt-10 items-start w-full ">
          <Link to="/home">
            <span className="material-symbols-outlined text-Primary-dark  font-bold text-[32px] active:text-MonoColor-300 pl-4">
              navigate_before
            </span>
          </Link>
        </div>
        <div className="flex items-center">
          <p className="text-Primary-dark text-[24px] font-normal item-center">
            History
          </p>
        </div>
        <hr className="border border-MonoColor-300 w-full mt-4" />
        <HistoryForm />
      </div>
    </div>
  );
}
