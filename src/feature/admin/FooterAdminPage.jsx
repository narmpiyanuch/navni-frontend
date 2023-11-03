import chat from '../../assets/speak.png'
import driver from '../../assets/driver.png'
import pinLocation from '../../assets/map.png'
import MenuBotton from './MenuBotton'
import { useLocation } from 'react-router-dom'


const menu = [
    { id: 1, title: 'Live Chat', icon: `${chat}`, to: '/chatadmin' },
    { id: 2, title: 'All Driver', icon: `${driver}`, to: '/alldriver' },
    { id: 3, title: 'Location', icon: `${pinLocation}`, to: '/location' }
]

export default function FooterAdminPage() {
    const { pathname } = useLocation()

    return (
        <footer className='flex fixed gap-10 justify-center w-full items-end bottom-10 z-20'>
            {menu.map(el => (
                <MenuBotton key={el.id} to={el.to} icon={el.icon} title={el.title} active={pathname == el.to} />))}
        </footer>
    )
}
