import HeaderAdminPage from '../../feature/admin/HeaderAdminPage'
import FooterAdminPage from '../../feature/admin/FooterAdminPage'
export default function AllDriverPage() {
    return (
        <div className='flex flex-col w-screen h-screen'>
            <HeaderAdminPage />
            <div>
                <button>
                    <p>Diver Name list</p>
                </button>
            </div>
            <FooterAdminPage />
        </div >
    )
}
