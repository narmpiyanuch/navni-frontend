import HeaderAdminPage from '../../feature/admin/HeaderAdminPage'
import FooterAdminPage from '../../feature/admin/FooterAdminPage'
import AllDriverNameList from './AllDriverNameList'
import { Link } from 'react-router-dom'


export default function AllDriverPage() {
    return (
        <div className='flex flex-col w-screen h-screen gap-y-8 '>
            <div>
                <HeaderAdminPage />
                <div className='flex justify-center items-center w-full'>
                    <div className='flex gap-5'>

                        <button className='border-2 bg-Primary-main rounded-full text-center py-2 px-6 active:bg-Primary-dark hover:cursor-pointer hover:bg-Primary-light'>
                            <p className='text-[20px] font-bold text-MonoColor-50'>Driver Name list</p>
                        </button>

                        <Link to="/alldriverpendingpage">
                            <button className='border-2 border-Primary-dark rounded-full text-center py-2 px-6 active:bg-Primary-dark hover:cursor-pointer hover:bg-Primary-light'>
                                <p className='text-[20px] font-bold text-Primary-dark active:text-MonoColor-50'>Pending to approval</p>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>


            <div className='flex flex-col mx-auto '>
                <AllDriverNameList />
            </div>

            <FooterAdminPage />
        </div >
    )
}
