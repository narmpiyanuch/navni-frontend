import HeaderAdminPage from '../../feature/admin/HeaderAdminPage'
import FooterAdminPage from '../../feature/admin/FooterAdminPage'
import { useState } from 'react'
import SubHeaderBottom from '../../feature/admin/subHeaderBottom'
import ModalLocationList from '../../component/ModalLocationList'
import ModalAddLocation from '../../component/ModalAddLocation'
import ModalEditPinLocation from '../../component/ModalEditPinLocation'

export default function LocationPage() {
    const [isOpenLocation, setIsOpenLocation] = useState(true)
    const [isLocationModal, setIsLocationModal] = useState(true)
    const [isOpenAddLocation, setIsOpenAddLocation] = useState(false)
    const [isOpenOn, setIsOpenOn] = useState(true)
    const [isOpanEditLocation, setIsOpenEditLocation] = useState(false)

    return (
        <div className='flex flex-col w-screen h-screen'>
            <HeaderAdminPage />
            <SubHeaderBottom
                setIsOpenLocation={setIsOpenLocation}
                isOpenLocation={isOpenLocation}
                isOpenAddLocation={isOpenAddLocation}
                setIsOpenAddLocation={setIsOpenAddLocation}
                setIsLocationModal={setIsLocationModal}
                setIsOpenEditLocation={setIsOpenEditLocation} />
            <div className='flex mx-auto w-screen flex-1 justify-center items-center pt-10 pb-[160px]' >
                <div className='grid grid-cols-2 h-full w-[1200px] gap-4'>
                    <div className='bg-red-300 h-[100%] overflow-hidden rounded-3xl drop-shadow-2xl'>
                    </div>
                    <ModalLocationList
                        open={isLocationModal}
                        isOpenOn={isOpenOn}
                        setIsOpenOn={setIsOpenOn}
                        setIsOpenEditLocation={setIsOpenEditLocation}
                        setIsLocationModal={setIsLocationModal}
                    />
                    <ModalAddLocation
                        open={isOpenAddLocation}
                    />
                    <ModalEditPinLocation
                        open={isOpanEditLocation}
                        setIsLocationModal={setIsLocationModal}
                        setIsOpenEditLocation={setIsOpenEditLocation}
                    />
                </div>
            </div>
            <FooterAdminPage />
        </div >
    )
}