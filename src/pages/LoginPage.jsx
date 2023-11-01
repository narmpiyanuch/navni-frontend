import whiteLogo from "../assets/whiteLogo.png";
import FooterForHome from "../feature/auth/FooterForHome";
import LoginForm from "../feature/auth/LoginForm";

export default function LoginPage() {
  return (
    <div className="flex flex-col m-auto items-center justify-center bg-Primary-main h-screen w-screen gap-2">
      <div className="flex flex-col fixed bottom-[40%] items-center ">
        <div className=" relative flex flex-col items-center  ">
          <img src={whiteLogo} alt="whitLogo" className="w-[240px]" />
          <p className="text-MonoColor-50 font-bold text-[20px] absolute top-[220px]">
            Welcome! to Navni
          </p>
        </div>
        <LoginForm />
      </div>
      <div className="fixed top-[64%] items-center justify-start pt-6 bg-MonoColor-50 h-full w-screen rounded-[40px_40px_0px_0px] mt-8">
        <FooterForHome />
      </div>
    </div>
  );
}
