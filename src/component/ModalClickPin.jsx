import purplePin from "../assets/purplePin.png";
import useMap from "../feature/hook/use-map";

import WhiteButton from "../feature/taxi/WhiteButton";

export default function ModalClickPin({ open, onClose }) {
  const {
    areaPin,
    setAreaPin,
    setSelectAreaTo,
    setSelectAreaFromTo,
    setAreaFromByTo,
    setDrop,
    setSelectArea,
    setPickup,
    selectArea,
    pickup,
    selectAreaTo,
    selectAreaFromTo,
    drop
  } = useMap();

  return (
    <>
      {open && (
        <>
          <div className=" fixed inset-0 bg-MonoColor-900 opacity-50 z-20"></div>
          <div className=" fixed inset-0 z-30 ">
            <div className="flex justify-center items-center min-h-full">
              <div className="flex flex-col items-center justify-center h-[320px] w-[280px] bg-MonoColor-50 rounded-3xl">
                <div className="flex flex-col items-end pr-8 w-full ">
                  <span
                    className="material-symbols-outlined text-MonoColor-400  hover:cursor-pointer"
                    onClick={() => {
                      onClose();
                      setAreaPin();
                    }}
                  >
                    close
                  </span>
                </div>
                <div className="flex justify-center items-end py-12">
                  <img src={purplePin} alt="pin" className="w-[36px]" />
                  <p className="tetx-[20px] font-semibold text-Primary-dark">
                    {areaPin ? areaPin.stationName : null}
                  </p>
                </div>
                <div className="flex flex-col gap-4">
                  <WhiteButton onClick={()=>{
                     setSelectArea(areaPin);
                     setPickup(areaPin)
                     if(areaPin==drop&&areaPin==selectAreaTo&&areaPin==selectAreaFromTo){
                         setDrop()
                         setSelectAreaTo()
                         setSelectAreaFromTo()

                     }
                  }} title="Set as Pick-up" />
                  <WhiteButton
                    onClick={() => {
                      setSelectAreaTo(areaPin);
                      setSelectAreaFromTo(areaPin);
                      setDrop(areaPin);
                      if(areaPin==selectArea&&areaPin==pickup){
                          setPickup()
                          setSelectArea()
                        }

                      console.log('first')
                    }}
                    title="Set as Drop-off"
                  />
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
