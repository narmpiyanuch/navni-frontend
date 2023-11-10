export default function ButtonAllDriverAmin({  status, setInput }) {
    return (
        <>
            {status === true ? (<button onClick={() => setInput((prev) => { return { ...prev, status: false } })} className="justify-center items-center flex rounded-full bg-OtherColor-darkGreen text-center px-4  text-MonoColor-50">Active</button>)
                : (<button onClick={() => setInput((prev) => {
                    return { ...prev, status: true }
                })} className="justify-center items-center flex rounded-full bg-Error-pressed text-center px-5 text-MonoColor-50">Inactive</button>)}
        </>)
}