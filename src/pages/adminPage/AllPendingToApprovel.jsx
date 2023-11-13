import { useState } from "react"
import AllPending from "./AllPending"
import { useEffect } from "react"
import axios from "../../config/axios"



export default function AllPendingToApprovel() {

const [allRegisterDriver,setAllRegisterDriver] = useState([])

const getAllPendingDriver = () =>{
    axios.get("/driver/all-register-driver").then((res)=>{
        setAllRegisterDriver(res.data.allDriver)}).catch((error)=>console.log(error))
}

useEffect(()=>{
    getAllPendingDriver()
    
},[])






    return (
        <div className="h-[70vh] overflow-auto p-4">
            {allRegisterDriver.map(el => (
                <AllPending key={el.id} firstName={el.firstName} lastName={el.lastName} idcard={el.idCard} gender={el.gender} tel={el.phoneNumber} email={el.email} id={el.id} image={el.image} getAllPendingDriver={getAllPendingDriver}  />
            ))}
        </div>
    )
}