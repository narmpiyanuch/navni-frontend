import React from 'react'
import ToDistinationExpand from './ToDistinationExpand'
import ToDestinationSmall from './ToDestinationSmall'
import { useState } from 'react'

export default function ToDestination({ setIsSuccess, setIsCancelTrip }) {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <>{isOpen ? <ToDistinationExpand setIsOpen={setIsOpen} setIsSuccess={setIsSuccess} setIsCancelTrip={setIsCancelTrip} /> : <ToDestinationSmall setIsOpen={setIsOpen} setIsSuccess={setIsSuccess} setIsCancelTrip={setIsCancelTrip} />}
        </>
    )
}
