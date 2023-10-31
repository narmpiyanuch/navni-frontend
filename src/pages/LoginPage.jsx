import whiteLogo from "../assets/whiteLogo.png";
import { GoogleLogin } from "react-google-login";
import FooterForHome from "../feature/auth/FooterForHome";
import LoginForm from "../feature/auth/LoginForm";
import { useAuth } from "../feature/hook/use-auth";

export default function LoginPage() {
  const { onSuccess, onFailure, clientId } = useAuth();

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
        <p className="text-MonoColor-50 text-[12px] py-2">OR</p>
        <GoogleLogin
          buttonText="Sign in with Google"
          clientId={clientId}
          onSuccess={onSuccess}
          onFailure={onFailure}
          cookiePolicy={"single_host_origin"}
          isSignedIn={true}
        />
      </div>
      <div className="fixed top-[64%] items-center justify-start pt-6 bg-MonoColor-50 h-full w-screen rounded-[40px_40px_0px_0px] mt-8">
        <FooterForHome />
      </div>
    </div>
  );
}
