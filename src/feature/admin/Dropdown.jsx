
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


    return (
        <>
            <button onClick={() => setIsOpen(!isOpen)} className="flex justify-between items-center gap-2 p-2 active:bg-Primary-light">
                <div className="flex items-center">
                    <p className="text-[18px] text-Primary-darker pl-8 font-semibold">Header Location</p>
                    <span className="material-symbols-outlined text-Primary-darker">expand_more</span>
                </div>
                <button class="material-symbols-outlined pr-10 text-[18px] text-Primary-darker"> delete</button>
            </button>
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
