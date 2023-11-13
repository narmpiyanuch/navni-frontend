import { useState } from "react"
import { createContext } from "react"

export const BookingContext = createContext()
export default function BookingContextProvider({children}) {
    const [bookingWait,setBookingWait]=useState()
  return (
    <BookingContext.Provider value={{setBookingWait,bookingWait}}>{children}</BookingContext.Provider>
  )
}
