import { useState } from "react";
import { jwtDecode } from "jwt-decode";
import { GoogleLogin } from "@react-oauth/google";
import ButtonInputForm from "./ButtonInputForm";

import { useAuth } from "../hook/use-auth";
import InputLoginForm from "./InputLoginForm";
import { loginSchema } from "../../validators/Auth-validator";
import InputErrorMessage from "./InputErrorMessage";
import validaterFn from "../../validators/validateFN";

export default function LoginForm() {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const { login } = useAuth();

  const [error, setError] = useState({});

  const onError = (res) => {
    console.log("failed", res);
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    const validationError = validaterFn(loginSchema, input);
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
      onSubmit={(event) => {
        handleSubmitForm(event);
      }}
    >
      <div className="flex flex-col gap-4 items-end">
        <InputLoginForm
          title={"Email"}
          value={input.email}
          onChange={(e) => setInput({ ...input, email: e.target.value })}
          hasError={error.email}
          type="email"
        />
        {error.email && <InputErrorMessage message={error.email} />}
        <InputLoginForm
          title={"Password"}
          value={input.password}
          type="password"
          onChange={(e) => setInput({ ...input, password: e.target.value })}
          hasError={error.password}
        />
        {error.password && <InputErrorMessage message={error.password} />}
      </div>
      <ButtonInputForm title="Log In" type={"submit"} />
      <p className="text-MonoColor-50 text-[12px] py-2">OR</p>
      <GoogleLogin
        onSuccess={(credentialResponse) => {
          const userData = jwtDecode(credentialResponse.credential);
          login(userData);
          console.log(userData);
        }}
        onError={onError}
      />
    </form>
  );
}
