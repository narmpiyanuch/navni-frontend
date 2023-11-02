import { Link } from "react-router-dom";
import HistoryFormDriver from "../../feature/taxi/HistoryFormDriver";

export default function ServiceHistoryDriver() {
  return (
    <div>
      <div className="flex flex-col m-auto items-center justify-start h-screen w-screen gap-2 ">
        <div className="bg-Primary-main w-full rounded-b-3xl rounded-g-3xl">
          <div className=" flex flex-col pt-10 items-start w-full">
            <Link to="/homediver">
              <span className="material-symbols-outlined text-MonoColor-50  font-bold text-[32px] active:text-MonoColor-300 pl-4">
                navigate_before
              </span>
            </Link>
          </div>
          <div className="flexs text-center">
            <p className="text-MonoColor-50 text-[24px] font-normal">History</p>
            <br />
          </div>
        </div>
        <hr className="mt-4" />
        <HistoryFormDriver />

        <div className="bg-Primary-main w-full rounded-tl-3xl rounded-tr-3xl items-center mt-auto h-16">
          <></>
        </div>
      </div>
    </div>
  );
}
