import HeaderAdminPage from "../../feature/admin/HeaderAdminPage";
import FooterAdminPage from "../../feature/admin/FooterAdminPage";
import AllPendingToApprovel from "./AllPendingToApprovel";
import { Link } from "react-router-dom";

export default function AllDriverPendingPage() {
  return (
    <div className="flex flex-col w-screen h-screen gap-y-8">
      <div>
        <HeaderAdminPage />
        <div className="flex justify-center items-center w-full">
          <div className="flex gap-5 ">
            <Link to="/alldriver">
              <button className="border-2 border-Primary-dark rounded-full text-center py-2 px-6 active:bg-Primary-dark hover:cursor-pointer hover:bg-Primary-light">
                <p className="text-[20px] font-bold text-Primary-dark active:text-MonoColor-50">
                  Driver Name list
                </p>
              </button>
            </Link>

            <button className="border-2 bg-Primary-main rounded-full text-center py-2 px-6 active:bg-Primary-dark hover:cursor-pointer hover:bg-Primary-light">
              <p className="text-[20px] font-bold text-MonoColor-50">
                Pending to approval
              </p>
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col mx-auto">
        <AllPendingToApprovel />
      </div>

      <FooterAdminPage />
    </div>
  );
}
