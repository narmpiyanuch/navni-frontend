import InputRegisterForm from "../auth/InputRegisterForm";

const labelRegister = [
    { id: 1, title: 'Fist name' },
    { id: 2, title: 'Last name' },
    { id: 3, title: 'Gender' },
    { id: 4, title: 'Birthday' },
    { id: 5, title: 'ID card' },
    { id: 6, title: 'Tel.' },
    { id: 7, title: 'Email' },
    { id: 8, title: 'Password' },
    { id: 9, title: 'Password confirm' },
]

export default function InputRegisterDiverAll() {
    return (<>
        <div className="flex flex-col gap-4 items-end pr-2">
            {labelRegister.map(el => <InputRegisterForm key={el.id} title={el.title} />)}
        </div>
    </>
    )
}
