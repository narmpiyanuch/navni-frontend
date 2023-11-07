export default function ButtonAllDriverAmin() {
    return (
        <select className="justify-center items-center">
            <option className="flex rounded-full text-center px-5 py-2">
                <p className="">Active</p>
            </option>
            <option className="flex rounded-full bg-Error-pressed text-center px-5 py-2">
                <p className="">Inactive</p>
            </option>
        </select>
    )
}