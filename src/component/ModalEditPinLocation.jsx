import InputAddPinLocationForm from "../feature/admin/InputAddPinLocationForm";
import { useAuth } from "../feature/hook/use-auth";
import useMap from "../feature/hook/use-map";
import PurpleButton from "../feature/payment/PurpleButton";
import Loading from "../utils/Loading";

export default function ModalEditPinLocation({
  setIsLocationModal,
  setIsOpenEditLocation,
  open,
}) {
  const {
    editLocation,
    setEditLocation,
    onChangeEditLocation,
    handleOnChangeEditLocation,
    editStationName,
  } = useMap();

 const{isLoading,setIsLoading}= useAuth()

  if (isLoading) {
    return <Loading isLoading={isLoading} />;
  }

  return (
    <>
      {open && (
        <div className="flex flex-col justify-center items-center">
          <div className=" w-full">
            <button
              onClick={() => {
                setIsLocationModal(true);
                setIsOpenEditLocation(false);
                setEditLocation();
              }}
              className="material-symbols-outlined text-Primary-dark"
            >
              arrow_back_ios
            </button>
            <p className="flex justify-center text-[24px] pb-4 font-semibold text-Primary-dark">
              Edit pin location
            </p>
          </div>
          <form className="flex flex-col gap-8  top-0 left-0 right-0 w-full rounded-3xl h-[320px] justify-center items-center bg-Primary-lightest ">
            <div className="flex flex-col items-end gap-4 ">
              <InputAddPinLocationForm
                title="Name"
                name={"stationName"}
                onChange={(event) => {
                  console.log(onChangeEditLocation);
                  handleOnChangeEditLocation(event);
                }}
                value={onChangeEditLocation.stationName}
              />
              <InputAddPinLocationForm
                title="Latitude"
                name={"latitude"}
                onChange={(event) => {
                  handleOnChangeEditLocation(event);
                }}
                value={onChangeEditLocation.latitude}
                disabled={"disabled"}
              />
              <InputAddPinLocationForm
                title="longitude"
                name={"longitude"}
                onChange={(event) => {
                  handleOnChangeEditLocation(event);
                }}
                value={onChangeEditLocation.longitude}
                disabled={"disabled"}
              />
              <InputAddPinLocationForm
                title="Area"
                name={"areaName"}
                onChange={(event) => {
                  handleOnChangeEditLocation(event);
                }}
                value={onChangeEditLocation.workArea.areaName}
                disabled={"disabled"}
              />
            </div>
            <PurpleButton
              onClick={(event) => {
                event.preventDefault();
                
                
                
                editStationName(onChangeEditLocation)
                setIsLocationModal(true);
                setIsOpenEditLocation(false);
                setEditLocation();
                
              }}
              title="Confirm edit"
            />
          </form>
        </div>
      )}
    </>
  );
}
