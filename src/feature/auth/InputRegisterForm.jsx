import React from 'react'

export default function InputRegisterForm({ title }) {
    return (
        <div className=" flex gap-4">
            <span className="text-Primary-main text-[18px] font-normal">{title}</span>
            <input className="w-[200px] px-2 border-2 border-Primary-main bg-MonoColor-50  outline-none rounded-2xl active:border-2 active:border-Primary-darker"></input>
        </div>
    )
}
