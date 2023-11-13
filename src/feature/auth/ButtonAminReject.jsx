export default function ButtonAdminReject({ title, onClick }) {
    return (
        <button onClick={onClick} className="justify-center items-center flex rounded-full bg-Error-pressed text-center px-4 text-MonoColor-50">{title}</button>
    )
}