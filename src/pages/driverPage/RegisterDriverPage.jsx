import Joi from 'joi'
import { useNavigate } from "react-router-dom"
import { Link } from 'react-router-dom'
import user from '../../assets/user.png'
import ButtonInputForm from '../../feature/auth/ButtonInputForm'
import { useState, useRef } from 'react'
import InputRegisterForm from '../../feature/auth/InputRegisterForm'
import InputErrorMessage from '../../feature/auth/InputErrorMessage'
import Swal from 'sweetalert2'
import validaterFn from "../../validators/validateFN";
import axios from '../../config/axios'
// import Loading from '../../component/Loading'

const registerDriverSchema = Joi.object({
    email: Joi.string().email({ tlds: false }).required(),
    password: Joi.string()
        .pattern(/^[a-zA-Z0-9]{8,30}$/)
        .trim()
        .required()
        .messages({
            'string.pattern.base': 'Password must be between 8 and 30 characters and contain only letters and numbers.'
        }),
    confirmPassword: Joi.string()
        .valid(Joi.ref("password"))
        .trim()
        .required()
        .strip(),
    firstName: Joi.string().trim().required(),
    lastName: Joi.string().trim().required(),
    phoneNumber: Joi.string().pattern(/^[0-9]{10}$/).messages({
        'string.pattern.base': 'Mobile number must be exactly 10 digits long and contain only numbers.'
    }),
    idCard: Joi.string().pattern(/^[0-9]{13}$/),
    gender: Joi.string().required(),

}).options({ allowUnknown: true });


export default function RegisterDriverPage() {
    const [file, setFile] = useState(null);
    const [loading, setLoading] = useState(false);
    const inputEl = useRef(null);

    const [input, setInput] = useState({
        email: "",
        password: "",
        confirmPassword: "",
        firstName: "",
        lastName: "",
        phoneNumber: "",
        gender: "",
        idCard: ""
    });
    const Navigate = useNavigate()
    const [error, setError] = useState({});

    const labelRegister_1 = [
        { id: 1, title: 'Fist name', value: `${input.firstName}`, name: 'firstName', hasError: error.firstName || null },
        { id: 2, title: 'Last name', value: `${input.lastName}`, name: 'lastName', hasError: error.lastName || null },
    ]
    const labelRegister_2 = [
        { id: 4, title: 'ID card', value: `${input.idCard}`, name: 'idCard', hasError: error.idCard || null },
        { id: 5, title: 'Tel.', value: `${input.phoneNumber}`, name: 'phoneNumber', hasError: error.phoneNumber || null },
        { id: 6, title: 'Email', value: `${input.email}`, name: 'email', hasError: error.email || null },
        { id: 7, title: 'Password', value: `${input.password}`, name: 'password', hasError: error.password || null },
        { id: 8, title: 'Password confirm', value: `${input.confirmPassword}`, name: 'confirmPassword', hasError: error.confirmPassword || null },
    ]

    const handdleChangInput = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
        // setError({ ...error, [e.target.name]: "" });
    };

    const handleSubmitForm = async (e) => {
        try {
            const newInput = { ...input }
            e.preventDefault();

            const validationError = validaterFn(registerDriverSchema, newInput);
            if (validationError) {
                return setError(validationError);
            }
            const formData = new FormData();
            console.log(newInput)
            if (file) {
                formData.append('image', file)
            }
            formData.append('driverData', JSON.stringify(newInput))

            const RegisterDriver = async (registerDriver) => {
                try {
                    const res = await axios.post('/driver/register', registerDriver)
                    console.log(res)
                    Swal.fire({
                        icon: 'success',
                        title: 'Register Diver SuccessFul!',
                        text: "Please, waiting for approved"
                    })
                } catch (err) {
                    console.log(err)
                }
            }
            setError({});
            setLoading(true)

            await RegisterDriver(formData)
            Navigate(`/`)
        } catch (err) {
            console.log(err)
        } finally {
            setLoading(false)
        }
    }

    return (
        <>
            {loading ? <loading /> : (<div className="flex flex-col m-auto items-center justify-start  bg-Primary-main h-screen w-screen gap-2">
                <div className=' flex flex-col pt-10 items-start w-full '>
                    <button className="material-symbols-outlined text-Primary-dark  font-bold text-[32px] active:text-MonoColor-300 pl-4">
                        <Link to='/login'>
                            navigate_before
                        </Link>
                    </button>
                </div>
                <div className="flex flex-col items-center pt-4  ">
                    <p className="text-MonoColor-50 font-bold text-[20px] ">Join Us!</p>
                    <p className="text-MonoColor-50 font-bold text-[20px] ">Welcome! to Navni Teamy</p>
                </div>
                <div className=" fixed top-[28%] items-center justify-start pt-6 bg-MonoColor-50 h-full w-screen rounded-[40px_40px_0px_0px] mt-8">
                    <form
                        onSubmit={(event) => {
                            handleSubmitForm(event);
                        }}
                        className='flex flex-col justify-center items-center w-full'>
                        <input
                            type="file"
                            className="hidden"
                            ref={inputEl}
                            onChange={e => {
                                if (e.target.files[0]) {
                                    setFile(e.target.files[0])
                                }
                            }}
                        />
                        <div className='flex justify-center items-center'
                            onClick={() => { inputEl.current.click() }}
                        >
                            {file ? (<img src={URL.createObjectURL(file)} alt="post" className='absolute border-4 rounded-full bg-MonoColor-50 border-MonoColor-50 w-[132px] top-[-80px] object-cover aspect-square' />) :
                                (<img src={user} alt='user' className='absolute border-4 rounded-full bg-MonoColor-50 border-MonoColor-50 w-[132px] top-[-80px] ' />)}
                        </div>
                        <div className="flex flex-col gap-2 pt-12">
                            {labelRegister_1.map(el =>
                                <div key={el.id} className="flex flex-col gap-[0.5px] items-end pr-2 " >
                                    <InputRegisterForm title={el.title} value={el.value} name={el.name} onChange={handdleChangInput} hasError={el.hasError} />
                                    {el.hasError && (<InputErrorMessage message={el.hasError} />)}
                                </div>)}
                            <div className="flex  gap-1 items-end justify-end pr-2 " >
                                <span className="text-Primary-main text-[18px] font-normal">
                                    Gender
                                </span>
                                <select
                                    value={input.gender}
                                    onChange={handdleChangInput}
                                    name='gender'
                                    className='w-[200px] px-2 border-2 outline-none rounded-2xl border-Primary-main  bg-MonoColor-50  active:border-2 active:border-Primary-darker'>
                                    <option>Choose gender</option>
                                    <option>FEMALE</option>
                                    <option>MALE</option>
                                    <option>OTHER</option>
                                </select>
                            </div>
                            {labelRegister_2.map(el =>
                                <div key={el.id} className="flex flex-col gap-1 items-end pr-2 " >
                                    <InputRegisterForm title={el.title} value={el.value} name={el.name} onChange={handdleChangInput} hasError={el.hasError} />
                                    {el.hasError && (<InputErrorMessage message={el.hasError} />)}
                                </div>)}
                        </div>
                        <div className='flex pt-4'>
                            <ButtonInputForm title='Join Us' type={"submit"} />
                        </div>
                    </form>
                </div >
            </div >)}
        </>
    )
}
