
import HeaderDiver from '../../feature/diver/HeaderDiver'
import WaitingOrder from '../../feature/diver/WaitingOrder'



export default function StartDiverPage() {

    return (
        <div className="flex flex-col m-auto items-center justify-center h-screen w-screen gap-2">
            <HeaderDiver />
            <WaitingOrder />
        </div >
    )
}
