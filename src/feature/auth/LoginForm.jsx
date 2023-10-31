import { useState } from "react";
import { useAuth } from "../hook/use-auth";
import ButtonInputForm from "./ButtonInputForm";
import { GoogleLogin } from "@react-oauth/google";
// import { GoogleLogin } from "react-google-login";
// import { gapi } from "gapi-script";
import InputLoginForm from "./InputLoginForm";
import { loginSchema } from "../../validators/Auth-validator";
import InputErrorMessage from "./InputErrorMessage";
// import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

export default function LoginForm() {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  // const navigate = useNavigate();

  const { login } = useAuth();

  const validateLogin = (input) => {
    const { error } = loginSchema.validate(input, { abortEarly: false });
    console.dir(error);
    if (error) {
      const result = error.details.reduce((acc, el) => {
        const { message, path } = el;
        acc[path[0]] = message;
        return acc;
      }, {});
      return result;
    }
  };

  // useEffect(() => {
  //   const initClient = () => {
  //     gapi.client.init({
  //       clientId: clientId,
  //       scope: "",
  //     });
  //   };
  //   gapi.load("client:auth2", () => {
  //     initClient();
  //   });
  // }, []);

  const [error, setError] = useState({});

  const onError = (res) => {
    console.log("failed", res);
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    const validationError = validateLogin(input);
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
