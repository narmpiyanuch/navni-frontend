


export default function InputAddPlateNumber({
    title,
    type = "text",
    setInput,
    input
}) {
    const handdleChangInput = (e) =>{
            setInput({ ...input, [e.target.name]: e.target.value });
    }
  return (
    <div className="flex">
    <span className="text-[18px] font-normal">{title}</span>
    <input
        className="w-[200px] text-MonoColor-700 text-[20px] px-4 border bg-MonoColor-100 outline-none rounded-2xl active:border-2"
        onChange={handdleChangInput}
        name="plateNumber"
        value={input?.plateNumber}
        type={type}
    />
</div>
  )
}

