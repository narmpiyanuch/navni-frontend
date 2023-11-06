export default function InputRegisterForm({
  title,
  name,
  value,
  onChange,
  type = "text",
  error,
}) {
  return (
    <div className=" flex gap-4">
      <span className="text-Primary-main text-[18px] font-normal">{title}</span>
      <input
        className={`w-[200px] px-2 border-2 outline-none rounded-2xl
                ${
                  error
                    ? ` border-Error-main `
                    : `border-Primary-main  bg-MonoColor-50  active:border-2 active:border-Primary-darker`
                }
                `}
        value={value}
        name={name}
        onChange={onChange}
        type={type}
      ></input>
    </div>
  );
}
