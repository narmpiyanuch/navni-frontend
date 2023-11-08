import pin from "../../assets/purplePin.png";
import useMap from "../hook/use-map";

export default function LocationPin({
  setIsLocationModal,
  setIsOpenEditLocation,
  setIsOpenOn,
  isOpenOn,
  dataLocation
}) {
    const{setEditLocation} = useMap()
  return (
//     subArea &&
//     subArea.map((data) => (
//       <div key={data.id} className="flex justify-between py-4  w-full px-10">
//         <div className="flex gap-4 items-center">
//           <img src={pin} alt="pin" className="w-[24px] h-[24px]" />
//           <p className="text-Primary-dark text-[18px] ">{data?.stationName}</p>
//         </div>
//         <div className="flex gap-4">
//           <button
//             onClick={() => {
//               setIsOpenEditLocation(true);
//               setIsLocationModal(false);
//             }}
//             className="py-2 px-4 bg-yellow-500 rounded-md"
//           >
//             <p className="text-[16px] text-MonoColor-50">Edit</p>
//           </button>
//           {isOpenOn ? (
//             <button
//               onClick={() => setIsOpenOn(false)}
//               className="py-2 px-4 bg-OtherColor-darkGreen rounded-md"
//             >
//               <p className="text-[16px] text-MonoColor-50">On</p>
//             </button>
//           ) : (
//             <button
//               onClick={() => setIsOpenOn(true)}
//               className="py-2 px-4 bg-Error-pressed rounded-md"
//             >
//               <p className="text-[16px] text-MonoColor-50">off</p>
//             </button>
//           )}
//         </div>
//       </div>
//     ))
    <div className='flex justify-between py-4  w-full px-10'>
        <div className='flex gap-4 items-center'>
            <img src={pin} alt='pin' className='w-[24px] h-[24px]' />
            <p className='text-Primary-dark text-[18px] '>{dataLocation && dataLocation.stationName}</p>
        </div>
        <div className='flex gap-4'>
            <button
                onClick={() => {
                    setIsOpenEditLocation(true)
                    setIsLocationModal(false)
                    setEditLocation(dataLocation)
                }}
                className='py-2 px-4 bg-yellow-500 rounded-md'>
                <p className='text-[16px] text-MonoColor-50'>Edit</p>
            </button>
            {isOpenOn ? (
                <button
                    onClick={() => setIsOpenOn(false)}
                    className='py-2 px-4 bg-OtherColor-darkGreen rounded-md'>
                    <p className='text-[16px] text-MonoColor-50'>On</p>
                </button>) :
                (<button
                    onClick={() => setIsOpenOn(true)}
                    className='py-2 px-4 bg-Error-pressed rounded-md'>
                    <p className='text-[16px] text-MonoColor-50'>off</p>
                </button>)}
        </div>
    </div>
  );
}
