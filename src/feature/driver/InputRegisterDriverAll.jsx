import InputRegisterForm from "../auth/InputRegisterForm";

// const labelRegister = [
//     { id: 1, title: 'Fist name' },
//     { id: 2, title: 'Last name' },
//     { id: 3, title: 'Gender' },
//     { id: 4, title: 'ID card' },
//     { id: 5, title: 'Tel.' },
//     { id: 6, title: 'Email' },
//     { id: 7, title: 'Password' },
//     { id: 8, title: 'Password confirm' },


export default function InputRegisterDriverAll({ title, value, name, }) {
    return (<>
        <div className="flex gap-4 items-end pr-2">
            <InputRegisterForm title={title} value={value} name={name} />
        </div>
    </>
    )
}
