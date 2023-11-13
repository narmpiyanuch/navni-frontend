

export default function ButtonAdminApprovel({ title, onClick }) {
    return (
        <>
            <button onClick={onClick} className="justify-center items-center flex rounded-full bg-OtherColor-darkGreen text-center px-4 text-MonoColor-50">{title}</button>
        </>
    )
}