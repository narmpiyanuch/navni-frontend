
import { useState } from "react";
import LocationPin from "../../feature/admin/LocationPin";


export default function Dropdown({
    setIsLocationModal,
    setIsOpenEditLocation,
    isOpenOn,
    setIsOpenOn,
    subArea,
    setIsOpenLocation
}) {

    const [isOpen, setIsOpen] = useState(false)
    const [isHide, setIsHide] = useState(true)


    return (
        <>
            <div className="flex justify-between items-center gap-2 p-2">
                <button onClick={() => setIsOpen(!isOpen)} className="flex items-center">
                    <p className="text-[18px] text-Primary-darker pl-8 font-semibold">Header Location</p>
                    <span className="material-symbols-outlined text-Primary-darker">expand_more</span>
                </button>
                <div className="flex pr-10">
                    <button onClick={() => setIsHide(!isHide)} className={`border-2 py-1 px-4 rounded-xl border-Primary-darker  ${isHide ? 'text-MonoColor-50 bg-Primary-darker' : 'text-Primary-darker'}`}>Hide</button>
                </div>
            </div>
            {isOpen && <>
                {subArea ? (
                    subArea.map((data, index) => (
                        <LocationPin
                            key={index + 1}
                            dataLocation={data}
                            setIsLocationModal={setIsLocationModal}
                            isOpenOn={isOpenOn}
                            setIsOpenOn={setIsOpenOn}
                            setIsOpenEditLocation={setIsOpenEditLocation}
                            setIsOpenLocation={setIsOpenLocation}
                        />
                    ))
                ) : (
                    <LocationPin
                        setIsLocationModal={setIsLocationModal}
                        isOpenOn={isOpenOn}
                        setIsOpenOn={setIsOpenOn}
                        setIsOpenEditLocation={setIsOpenEditLocation}
                        setIsOpenLocation={setIsOpenLocation}
                    />
                )}</>}


        </>
    )
}
