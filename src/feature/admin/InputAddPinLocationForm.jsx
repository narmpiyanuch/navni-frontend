import PurpleButton from '../payment/PurpleButton'


export default function InputAddPinLocationForm({
    name=null,
    title,
    onChange,
    value,
    type = "text",
    error,
    disabled
}) {
    return (
        <>
            <div className=" flex gap-4">
                <span className="text-Primary-dark text-[18px] font-normal">{title}</span>
                <input
                    className={`w-[240px] text-MonoColor-700 text-[20px] px-4 border bg-MonoColor-50 outline-none rounded-2xl active:border-2 active:border-Primary-dark ${disabled?"text-[#94A3B8]":""}`}
                    onChange={onChange}
                    value={value}
                    type={type}
                    error={error}
                    name={name}
                    disabled={disabled}
                />
            </div>
        </>
    );
}