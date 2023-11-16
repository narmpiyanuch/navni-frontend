import { useState } from "react"
import axios from "../../config/axios"
import AllDriver from "./AllDriver"
import { useEffect } from "react"



export default function AllDriverNameList() {

    const [drivers, setDrivers] = useState([])

    const getAllDriver = async () => {
        try {
            const { data } = await axios.get("/admin/all-driver-employee")
            const allDrivers = data.driversEmployee
            setDrivers(allDrivers)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getAllDriver()
    }, [])
    return (
        <div className="h-[70vh] overflow-auto p-4">
            {drivers.map(el => (
                <AllDriver key={el.id}
                    id={el.employeeInformation[0]?.id}
                    firstName={el.employeeInformation[0]?.firstName}
                    lastName={el.employeeInformation[0]?.lastName}
                    idcard={el.employeeInformation[0]?.idCard}
                    gender={el.employeeInformation[0]?.gender}
                    tel={el.employeeInformation[0]?.phoneNumber}
                    image={el.employeeInformation[0]?.image}
                    email={el.email}
                    platenumber={el.employeeInformation[0]?.carinfomation[0]?.plateNumber}
                    getAllDriver={getAllDriver}
                    status={el.employeeInformation[0]?.status}
                />

            ))}
        </div>
    )
}