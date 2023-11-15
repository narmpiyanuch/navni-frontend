import user from '../../assets/user.png'
import carSeat from '../../assets/car-seat.png'
import { Link } from "react-router-dom";
import useDriver from '../hook/use-driver';

export default function HeaderDriver() {
  const { profile } = useDriver()
  console.log(profile)
  return (
    <div className="flex fixed top-0 flex-col items-center justify-start bg-Primary-main w-screen h-[160px] rounded-[0px_0px_40px_40px]">
      <div className=" flex flex-col pt-4 items-start w-full ">
        <span className="material-symbols-outlined text-Primary-dark  font-bold text-[32px] active:text-MonoColor-300 pl-4">
          <Link to="/homedriver">navigate_before</Link>
        </span>
      </div>
      <div className="flex fixed gap-4 top-[6%] items-center">
        <img
          src={profile?.image ? profile?.image : user}
          className="rounded-full aspect-square w-[60px] border-4 border-MonoColor-50 bg-MonoColor-50 drop-shadow-lg"
        />
        <div className=" flex-shrink">
          <div className="flex justify-between items-center">
            <p className="text-[18px] text-MonoColor-50">
              Hello  {profile && profile?.firstName}
            </p>
          </div>
          <hr className="w-[240px] border-[1.5px] rounded-xl" />
          <div className="flex flex-col gap-2 justify-between item-center">
            <div className="flex gap-2 items-center">
              <span className="material-symbols-outlined text-MonoColor-50 font-thin text-[18px]">
                directions_car
              </span>
              <p className="text-[14px] text-MonoColor-50"> {profile && profile?.plateNumber}</p>
            </div>
            <div className="flex gap-2 items-center w-[160px] bg-Primary-darker py-1 px-2 rounded-xl">
              <img src={carSeat} className='w-[20px]' />
              <p className="text-[14px] text-MonoColor-50">Available seat: {profile && profile.seats}</p>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
