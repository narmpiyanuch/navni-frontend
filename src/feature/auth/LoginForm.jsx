import { useState } from "react";
import { useAuth } from "../hook/use-auth";

import ButtonInputForm from "./ButtonInputForm";
import InputLoginForm from "./InputLoginForm";
import { loginSchema } from "../../validators/Auth-validator";
import validateFN from "../../validators/validateFN";

export default function LoginForm() {
    const [input, setInput] = useState({
        email: "",
        password: "",
    });

    const [error, setError] = useState({});

    const { login } = useAuth();

    const handleChangeInput = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmitForm = (e) => {
        e.preventDefault();
        const validationError = validateFN(loginSchema, input);
        if (validationError) {
            return setError(validationError);
        }
        setError({});
        login(input).catch((error) => {
            console.log(error);
        });
    };

    return (
        <form
            className="flex flex-col items-center gap-4 pt-8"
            onSubmit={handleSubmitForm}
        >
            <div className="flex flex-col gap-4 items-end">
                <InputLoginForm
                    title={"Email"}
                    value={input.email}
                    onChange={handleChangeInput}
                    hasError={error.email}
                />
                <InputLoginForm
                    title={"Password"}
                    value={input.password}
                    type="password"
                    onChange={handleChangeInput}
                    hasError={error.password}
                />
            </div>
            <ButtonInputForm title="Log In" />
        </form>
    );
}
