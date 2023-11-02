import React from 'react'
import PurpleButton from '../feature/payment/PurpleButton'
import { Link } from 'react-router-dom'
export default function ModalSuccess({ open, to }) {
    return (<>
        {open && (<>
            <div className=" fixed inset-0 z-20"></div>
            <div className=" fixed inset-0 z-30 ">
                <div className='flex justify-center items-center min-h-full'>
                    <div className="flex flex-col items-center justify-start h-[320px] w-[280px] bg-MonoColor-50 rounded-3xl gap-4">
                        <button className="flex flex-col items-end pr-8 w-full pt-6">
                            <Link to={to}>
                                <span className="material-symbols-outlined text-MonoColor-400  hover:cursor-pointer" >close</span>
                            </Link>
                        </button>
                        <div className='flex flex-col justify-center items-center text-center py-8 px-10 gap-2'>
                            <span class="material-symbols-outlined w-[40px] h-[40px] bg-Error-pressed items-center justify-center flex text-MonoColor-50 rounded-full">done</span>
                            <p className='text-[24px] font-semibold text-Error-pressed '>Trip cancel</p>
                        </div>
                        <div >
                            <Link to={to}>
                                <PurpleButton title='Back to Home' />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>)}
    </>)
}
