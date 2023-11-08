import { useState } from "react";
import InputErrorMessage from "../feature/auth/InputErrorMessage";
import validaterFn from "../validators/validateFN";
import { editProfileUser } from "../validators/Auth-validator";
import axios from "../config/axios";
import { createAlert } from "../utils/sweetAlert";
import InputEditForm from "../feature/auth/InputEditForm ";
import PurpleButton from "../feature/payment/PurpleButton";
import { useEffect } from "react";

export default function ModalEditProfile({
    open,
    onClose,
    profile,
    setProfile,
}) {
    const [input, setInput] = useState({
        firstName: "",
        lastName: "",
        phoneNumber: "",
    });

    const [error, setError] = useState({});

    useEffect(() => {
        setInput({
            firstName: profile?.data[0].firstName,
            lastName: profile?.data[0].lastName,
            phoneNumber: profile?.data[0].phoneNumber,
        });
    }, [profile]);

    const handdleChangInput = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
        setError({ ...error, [e.target.name]: "" });
    };

    const handleSubmitForm = async (e) => {
        try {
            e.preventDefault();
            const validationError = validaterFn(editProfileUser, input);
            if (validationError) {
                return setError(validationError);
            }
            await axios.patch("/user/updateProfile", input);
            createAlert("Profile updated!");
        } catch (error) {
            console.log(error);
        } finally {
            const data = await axios.get("/user");
            setProfile(data);
            onClose();
        }
    };

    return (
        <>
            {open && (
                <>
                    <div className=" fixed inset-0 bg-MonoColor-900 opacity-50 z-20"></div>
                    <div className=" fixed inset-0 z-30 ">
                        <div className="flex justify-center items-center min-h-full">
                            <div className="flex flex-col items-center justify-start h-[320px] w-[280px] bg-MonoColor-50 rounded-3xl gap-4">
                                <div className="flex flex-col items-end pr-8 w-full pt-6">
                                    <span
                                        className="material-symbols-outlined text-MonoColor-400  hover:cursor-pointer"
                                        onClick={onClose}
                                    >
                                        close
                                    </span>
                                </div>
                                <form
                                    className="flex flex-col justify-center gap-4"
                                    onSubmit={handleSubmitForm}
                                >
                                    <div className="flex flex-col gap-4 justify-end items-end pr-[16px] pt-4 w-full">
                                        <InputEditForm
                                            title="Fist name"
                                            name="firstName"
                                            value={input?.firstName}
                                            onChange={handdleChangInput}
                                            error={error.firstName}
                                        />
                                        {error.firstName && (
                                            <InputErrorMessage message="please fill in" />
                                        )}
                                        <InputEditForm
                                            title="Last name"
                                            name="lastName"
                                            value={input?.lastName}
                                            onChange={handdleChangInput}
                                            error={error.lastName}
                                        />
                                        {error.lastName && (
                                            <InputErrorMessage message="please fill in" />
                                        )}
                                        <InputEditForm
                                            title="Tel."
                                            name="phoneNumber"
                                            value={input?.phoneNumber}
                                            onChange={handdleChangInput}
                                            error={error.phoneNumber}
                                        />
                                        {error.phoneNumber && (
                                            <InputErrorMessage message="please fill in" />
                                        )}
                                    </div>
                                    <div className="flex justify-center pt-6">
                                        <PurpleButton
                                            title="Confirm edit"
                                            type="submit"
                                        />
                                        {/* link กับหลังบ้านแล้วใช้ swal2 ถ้าไม่errorหลังแก้ข้อมูล */}
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    );
}
