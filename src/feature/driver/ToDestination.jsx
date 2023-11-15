import React from 'react'
import ToDistinationExpand from './ToDistinationExpand'
import ToDestinationSmall from './ToDestinationSmall'
import { useState } from 'react'

export default function ToDestination({ setIsSuccess }) {

    return (
        <>
            <div className=" flex flex-col gap-1 fixed items-center justify-start top-[20%] w-full max-h-[28vh] drop-shadow-xl overflow-auto">
                <ToDestinationSmall setIsSuccess={setIsSuccess} />
                <ToDestinationSmall setIsSuccess={setIsSuccess} />
                <ToDestinationSmall setIsSuccess={setIsSuccess} />
                <ToDestinationSmall setIsSuccess={setIsSuccess} />
                <ToDestinationSmall setIsSuccess={setIsSuccess} />
                <ToDestinationSmall setIsSuccess={setIsSuccess} />
            </div>
        </>
    )
}
