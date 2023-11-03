import HeaderAdminPage from '../../feature/admin/HeaderAdminPage'
import FooterAdminPage from '../../feature/admin/FooterAdminPage'
import { useState } from 'react'
import SubHeaderBottom from '../../feature/admin/subHeaderBottom'
import map from '../../assets/mapExample.jpeg'
import ModalLocationList from '../../component/ModalLocationList'
import ModalAddLocation from '../../component/ModalAddLocation'

export default function LocationPage() {
    const [isOpenLocation, setIsOpenLocation] = useState(true)
    const [isOpenAddLocation, setIsOpenAddLocation] = useState(false)
    const [isOpenOn, setIsOpenOn] = useState(true)

    return (
        <div className='flex flex-col w-screen h-screen'>
            <HeaderAdminPage />
            <SubHeaderBottom
                setIsOpenLocation={setIsOpenLocation}
                isOpenLocation={isOpenLocation}
                isOpenAddLocation={isOpenAddLocation}
                setIsOpenAddLocation={setIsOpenAddLocation} />
            <div className='flex mx-auto w-screen h-[68%] justify-center items-center py-8'>
                <div className='grid grid-cols-2 w-[1200px] h-full gap-4'>
                    <div className='bg-red-300 overflow-hidden rounded-3xl drop-shadow-2xl'>
                        <img src={map} />
                    </div>
                    <ModalLocationList
                        open={isOpenLocation}
                        isOpenOn={isOpenOn}
                        setIsOpenOn={setIsOpenOn}
                    />
                    <ModalAddLocation
                        open={isOpenAddLocation}
                    />
                </div>
            </div>
            <FooterAdminPage />
        </div >
    )
}
