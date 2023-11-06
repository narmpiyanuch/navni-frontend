
export default function SubHeaderBottom({ setIsOpenEditLocation, setIsLocationModal, setIsOpenLocation, setIsOpenAddLocation, isOpenAddLocation, isOpenLocation }) {
    return (
        <div className='flex pt-[2%] justify-center w-screen'>
            <div className='flex gap-8'>
                <button
                    onClick={() => {
                        setIsOpenLocation(true)
                        setIsOpenAddLocation(false)
                        setIsLocationModal(true)
                        setIsOpenEditLocation(false)
                    }}
                    className={`py-1 px-4 border-4 border-Primary-main text-[20px] rounded-3xl ${isOpenLocation ? 'bg-Primary-main text-MonoColor-50' : 'text-Primary-main bg-transparent'}`}>
                    <p >Location list</p>
                </button>
                <button
                    onClick={() => {
                        setIsOpenLocation(false)
                        setIsOpenAddLocation(true)
                        setIsLocationModal(false)
                        setIsOpenEditLocation(false)
                    }}
                    className={`py-1 px-4 border-4 border-Primary-main text-[20px] rounded-3xl ${isOpenAddLocation ? 'bg-Primary-main text-MonoColor-50' : 'text-Primary-main bg-transparent'}`}>
                    <p >Add pin</p>
                </button>
            </div>
        </div>
    )
}
