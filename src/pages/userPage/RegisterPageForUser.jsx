import whiteLogo from "../../assets/whiteLogo.png";
import InputRegisterForm from "../../feature/auth/InputRegisterForm";
import ButtonInputForm from "../../feature/auth/ButtonInputForm";
import ButtonByGoogle from "../../feature/auth/BottonByGoogle";
import { useState } from "react";
import InputErrorMessage from "../../feature/auth/InputErrorMessage";

export default function RegisterPageForUser() {
    const [input, setInput] = useState({
        email: "",
        password: "",
        confirmPassword: "",
        firstName: "",
        lastName: "",
        phoneNumber: "",
    });
    const [error, setError] = useState({});

    const handdleChangInput = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
        setError({ ...error, [e.target.name]: "" });
    };

    const handleSubmitForm = (e) => {
        e.preventDefault();
        // const validationError = validaterFn(registerSchema, input);
        // if (validationError) {
        //     return setError(validationError);
        // }
    };

    return (
        <div className="flex flex-col m-auto items-center justify-center fixed bottom-[36%] bg-Primary-main h-screen w-screen gap-2">
            <div className=" relative flex flex-col items-center  ">
                <img src={whiteLogo} alt="whitLogo" className="w-[240px]" />
                <p className="text-MonoColor-50 font-bold text-[18px] absolute top-[220px]">
                    Welcome! to Navni Family
                </p>
            </div>
            <div className="fixed top-[30%] items-center justify-start pt-6 bg-MonoColor-50 h-full w-screen rounded-[40px_40px_0px_0px] mt-8">
                <form
                    className="flex flex-col items-center gap-4 pt-8"
                    onSubmit={handleSubmitForm}
                >
                    <div className="flex flex-col gap-4 items-end">
                        <div>
                            <InputRegisterForm
                                title={"First name"}
                                name={"firstName"}
                                value={input.firstName}
                                onChange={handdleChangInput}
                            />
                            {error.firstName && (
                                <InputErrorMessage
                                    message={"Please fill in information"}
                                />
                            )}
                        </div>

                        <div>
                            <InputRegisterForm
                                title={"Last name"}
                                name={"lastName"}
                                value={input.lastName}
                                onChange={handdleChangInput}
                            />
                            {error.lastName && (
                                <InputErrorMessage
                                    message={"Please fill in information"}
                                />
                            )}
                        </div>
                        <div>
                            <InputRegisterForm
                                title={"Tel."}
                                name={"phoneNumber"}
                                value={input.phoneNumber}
                                onChange={handdleChangInput}
                            />
                            {error.phoneNumber && (
                                <InputErrorMessage
                                    message={"Please fill in information"}
                                />
                            )}
                        </div>

                        <div>
                            <InputRegisterForm
                                title={"Email"}
                                type={"email"}
                                name={"email"}
                                value={input.email}
                                onChange={handdleChangInput}
                            />
                            {error.email && (
                                <InputErrorMessage
                                    message={"Please fill in information"}
                                />
                            )}
                        </div>
                        <div>
                            <InputRegisterForm
                                title={"Password"}
                                type={"password"}
                                name={"confirmPassword"}
                                value={input.password}
                                onChange={handdleChangInput}
                            />
                            {error.password && (
                                <InputErrorMessage
                                    message={"Please fill in information"}
                                />
                            )}
                        </div>
                        <div>
                            <InputRegisterForm
                                title={"Confirm password"}
                                type={"password"}
                                name={"confirmPassword"}
                                value={input.confirmPassword}
                                onChange={handdleChangInput}
                            />
                            {error.confirmPassword && (
                                <InputErrorMessage
                                    message={
                                        "Password did not match. Try again"
                                    }
                                />
                            )}
                        </div>
                    </div>
                    <ButtonInputForm title="Sign Up" />
                </form>
                <div className="flex flex-col items-center">
                    <p className="text-Primary-dark text-[12px] py-2">OR</p>
                    <ButtonByGoogle title="Sign up with google" />
                </div>
            </div>
        </div>
    );
}
