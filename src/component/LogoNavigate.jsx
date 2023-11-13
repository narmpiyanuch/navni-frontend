import { useNavigate } from "react-router-dom";

import logoBGpurple from "../assets/logoBGpurple.jpg";

export default function LogoNavigate({ to }) {
    const navigate = useNavigate();
    return (
        <img
            onClick={() => {
                navigate(to);
            }}
            src={logoBGpurple}
            alt="logo"
            className="z-40 rounded-full w-[80px] border-4 border-MonoColor-50 active:border-Primary-main hover:cursor-pointer"
        />
    );
}
