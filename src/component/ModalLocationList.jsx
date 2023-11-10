import Dropdown from "../feature/admin/Dropdown";
// import LocationPin from "../feature/admin/LocationPin";
import useMap from "../feature/hook/use-map";

export default function ModalLocationList({
  setIsLocationModal,
  setIsOpenEditLocation,
  open,
  isOpenOn,
  setIsOpenOn,
  setIsOpenLocation
}) {
  const { subArea, getCircle } = useMap();
  console.log(getCircle)

  return (
    <>
      {open && (
        <div className="bg-Primary-lightest relative rounded-3xl ">
          <div className="flex sticky top-0 left-0 right-0 gap-2 w-full rounded-3xl h-[120px] justify-center items-center bg-Primary-lightest ">
            <input
              type="text"
              className="bg-MonoColor-50 rounded-3xl w-[320px] h-[36pxoutline-non p-4"
              placeholder="search"
            />
            <span className="material-symbols-outlined text-MonoColor-50">
              search
            </span>
          </div>
          <div className="flex flex-col w-full max-h-[48vh] overflow-auto">
            {
              getCircle && getCircle.area.map((workarea) => (
                <Dropdown key={workarea.id} workarea={workarea} setIsOpenLocation={setIsOpenLocation} setIsLocationModal={setIsLocationModal} setIsOpenEditLocation={setIsOpenEditLocation} isOpenOn={isOpenOn} setIsOpenOn={setIsOpenOn} subArea={subArea} />

              ))
            }
          </div>
        </div>
      )}
    </>
  );
}
