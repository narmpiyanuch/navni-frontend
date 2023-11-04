export default function InputLoginForm({
  title,
  onChange,
  value,
  type = "text",
  error,
}) {
  return (
    <div className=" flex gap-4">
      <span className="text-MonoColor-50 text-[18px] font-normal">{title}</span>
      <input
        className="w-[200px] px-2 border bg-MonoColor-50 outline-none rounded-2xl active:border-2 active:border-Primary-dark"
        onChange={onChange}
        value={value}
        type={type}
        error={error}
      />
    </div>
  );
}
