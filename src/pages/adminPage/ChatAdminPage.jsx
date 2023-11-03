import HeaderAdminPage from '../../feature/admin/HeaderAdminPage'
import FooterAdminPage from '../../feature/admin/FooterAdminPage'
import UserChatBox from '../../feature/admin/UserChatBox'

export default function ChatAdminPage() {
    return (
        <div className='flex flex-col w-screen h-screen'>
            <HeaderAdminPage />
            <div className='flex py-[2%] justify-center min-h-[72%] z-10 '>
                <div className='grid grid-cols-3 w-[1200px] gap-4 '>
                    <div className='flex relative bg-Primary-light rounded-3xl h-full overflow-auto'>
                        <div className='flex sticky top-0 left-0 right-0 flex-col gap-2 z-10 w-full h-[140px] justify-center items-center bg-Primary-light '>
                            <input type="text" className='bg-MonoColor-50 rounded-3xl w-[280px] h-[36px] outline-non p-2' placeholder='search' />
                            <select type="text" className='bg-MonoColor-50 rounded-3xl w-[280px] h-[36px] outline-none p-2' >
                                <option className='text-MonoColor-400'>Choose a room</option>
                            </select>
                        </div>
                        <div className='flex flex-col gap-4 absolute top-36 px-10 w-full items-center z-0'>
                            <UserChatBox />
                        </div>
                    </div>
                    <form className='col-span-2 relative h-full bg-MonoColor-50 border-4 border-Primary-dark rounded-3xl'>
                        <div className='flex sticky gap-2 z-10 w-full h-full justify-center items-end pb-4'>
                            <div className='flex items-center w-[80%] h-[40px] border-4 border-Primary-light rounded-2xl '>
                                <input type='text' className='outline-none w-full rounded-2xl bg-MonoColor-50 px-4' placeholder='Type a messege here...' />
                                <botton class="material-symbols-outlined text-Primary-light">send</botton>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <FooterAdminPage />
        </div >
    )
}
