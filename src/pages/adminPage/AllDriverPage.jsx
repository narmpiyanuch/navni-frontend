import HeaderAdminPage from '../../feature/admin/HeaderAdminPage'
import FooterAdminPage from '../../feature/admin/FooterAdminPage'
import AllDriverNameList from './AllDriverNameList'

export default function AllDriverPage() {
    return (
        <div className='flex flex-col justify-center items-center gap-5'>
            <HeaderAdminPage />
            <div className='flex gap-5'>
                <button className='border-2 bg-Primary-main rounded-full text-center py-2 px-6 active:bg-Primary-dark hover:cursor-pointer hover:bg-Primary-light'>
                    <p className='text-[20px] font-bold text-MonoColor-50'>Diver Name list</p>
                </button>

                <button className='border-2 border-Primary-dark rounded-full text-center py-2 px-6 active:bg-Primary-dark hover:cursor-pointer hover:bg-Primary-light'>
                    <p className='text-[20px] font-bold text-Primary-dark active:text-MonoColor-50'>Pending to appoval</p>
                </button>
            </div>

            <AllDriverNameList />

            <FooterAdminPage />
        </div >
    )
}
