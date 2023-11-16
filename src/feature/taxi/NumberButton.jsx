import React from "react";
import { useEffect } from "react";

const numberPerson = [
  { id: 1, number: "1" },
  { id: 2, number: "2" },
  { id: 3, number: "3" },
  { id: 4, number: "4" },
  { id: 5, number: "5" },
  { id: 6, number: "6" },
];

export default function NumberButton({ setClick, click }) {
  useEffect(() => {
    setClick("1");
  }, []);

  return (
    <>
      {numberPerson.map((el) => (
        <button
          type="button"
          onClick={() => {
            setClick(el.number);
          }}
          key={el.id}
          className={`flex justify-center items-center w-[60px] h-[42px] border-2 border-Primary-main rounded-xl active:bg-Primary-light ${
            click === el.number ? "bg-Primary-main" : " bg-slate-50"
          }`}
        >
          <p
            className={` active:text-Primary-darker ${
              click === el.number ? "text-MonoColor-50 " : " text-Primary-main"
            }`}
          >
            {el.number}
          </p>
        </button>
      ))}
    </>
  );
}
