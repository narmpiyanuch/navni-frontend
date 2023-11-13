import HeaderAdminPage from '../../feature/admin/HeaderAdminPage'
import FooterAdminPage from '../../feature/admin/FooterAdminPage'
import { useState } from 'react'
import SubHeaderBottom from '../../feature/admin/SubHeaderBottom'
import ModalLocationList from '../../component/ModalLocationList'
import ModalAddLocation from '../../component/ModalAddLocation'
import ModalEditPinLocation from '../../component/ModalEditPinLocation'
import MapAdmin from '../../feature/googlemap/MapAdmin'
import useMap from '../../feature/hook/use-map'
import { useEffect } from 'react'
import ModalAddArea from '../../component/ModalAddArea '

export default function LocationPage() {
    const [isOpenLocation, setIsOpenLocation] = useState(true)
    const [isLocationModal, setIsLocationModal] = useState(true)
    const [isOpenAddLocation, setIsOpenAddLocation] = useState(false)
    const [isOpenOn, setIsOpenOn] = useState(true)
    const [isOpanEditLocation, setIsOpenEditLocation] = useState(false)
    const { setOnChangeAddLocation, setOnChangeAddArea } = useMap()
    const [isOpenAddArea, setIsOpenAddArea] = useState(false)
    useEffect(() => {
        if (!isOpenAddLocation) {
            setOnChangeAddLocation({
                stationName: "",
                latitude: "",
                longitude: "",
                areaName: "",
                workAreaId: ""
            })
        }
    }, [isOpenAddLocation])

    useEffect(() => {
        if (!isOpenAddArea) {
            setOnChangeAddArea({
                area_name: "",
                latitude: "",
                longitude: "",
                radius: "500"
            })
        }
    }, [isOpenAddArea])

    return (
        <div className='flex relative flex-col w-screen h-screen'>
            <HeaderAdminPage />
            <SubHeaderBottom
                setIsOpenLocation={setIsOpenLocation}
                isOpenLocation={isOpenLocation}
                isOpenAddLocation={isOpenAddLocation}
                setIsOpenAddLocation={setIsOpenAddLocation}
                setIsLocationModal={setIsLocationModal}
                setIsOpenEditLocation={setIsOpenEditLocation}
                setIsOpenAddArea={setIsOpenAddArea}
                isOpenAddArea={isOpenAddArea}
            />
            <div className='flex flex-col mx-auto w-screen justify-center items-center pt-10 flex-1 pb-[160px]'>
                <div className='grid grid-cols-2 h-full w-[1200px] gap-4'>
                    <div className='bg-red-300 h-[100%] overflow-hidden rounded-3xl drop-shadow-2xl'>
                        <MapAdmin isOpenAddLocation={isOpenAddLocation} isOpenAddArea={isOpenAddArea} />
                    </div>
                    <ModalLocationList
                        open={isLocationModal}
                        isOpenOn={isOpenOn}
                        setIsOpenOn={setIsOpenOn}
                        setIsOpenEditLocation={setIsOpenEditLocation}
                        setIsLocationModal={setIsLocationModal}
                        setIsOpenLocation={setIsOpenLocation}
                    />
                    <ModalAddLocation
                        open={isOpenAddLocation}
                        setIsLocationModal={setIsLocationModal}
                        setIsOpenAddLocation={setIsOpenAddLocation}
                        setIsOpenLocation={setIsOpenLocation}
                    />
                    <ModalEditPinLocation
                        open={isOpanEditLocation}
                        setIsLocationModal={setIsLocationModal}
                        setIsOpenEditLocation={setIsOpenEditLocation}
                        setIsOpenLocation={setIsOpenLocation}
                    />
                    <ModalAddArea
                        open={isOpenAddArea}
                        setIsLocationModal={setIsLocationModal}
                        setIsOpenAddArea={setIsOpenAddArea}
                        setIsOpenLocation={setIsOpenLocation}
                    />

                </div>
            </div>
            <FooterAdminPage />
        </div >
    )
}
