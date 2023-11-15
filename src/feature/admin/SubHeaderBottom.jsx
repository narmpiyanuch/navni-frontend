
export default function SubHeaderBottom({ isOpenAddArea, setIsOpenAddArea, setIsOpenEditLocation, setIsLocationModal, setIsOpenLocation, setIsOpenAddLocation, isOpenAddLocation, isOpenLocation }) {
    return (
        <div className='flex pt-[2%] justify-center w-screen'>
            <div className='flex gap-8'>
                <button
                    onClick={() => {
                        setIsOpenLocation(true)
                        setIsOpenAddLocation(false)
                        setIsLocationModal(true)
                        setIsOpenEditLocation(false)
                        setIsOpenAddArea(false)
                    }}
                    className={`py-1 px-4 border-4 border-Primary-main text-[20px] rounded-3xl ${isOpenLocation ? 'bg-Primary-main text-MonoColor-50' : 'text-Primary-main bg-transparent'}`}>
                    <p >Location list</p>
                </button>
                <button
                    onClick={() => {
                        setIsOpenLocation(false)
                        setIsOpenAddLocation(false)
                        setIsLocationModal(false)
                        setIsOpenEditLocation(false)
                        setIsOpenAddArea(true)
                    }}
                    className={`py-1 px-4 border-4 border-Primary-main text-[20px] rounded-3xl ${isOpenAddArea ? 'bg-Primary-main text-MonoColor-50' : 'text-Primary-main bg-transparent'}`}>
                    <p >Add area</p>
                </button>
                <button
                    onClick={() => {
                        setIsOpenLocation(false)
                        setIsOpenAddLocation(true)
                        setIsLocationModal(false)
                        setIsOpenEditLocation(false)
                        setIsOpenAddArea(false)
                    }}
                    className={`py-1 px-4 border-4 border-Primary-main text-[20px] rounded-3xl ${isOpenAddLocation ? 'bg-Primary-main text-MonoColor-50' : 'text-Primary-main bg-transparent'}`}>
                    <p >Add pin</p>
                </button>
            </div>
        </div>
    )
}
