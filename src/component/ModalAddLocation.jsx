import InputAddPinLocationForm from "../feature/admin/InputAddPinLocationForm";
import useMap from "../feature/hook/use-map";
import PurpleButton from "../feature/payment/PurpleButton";

export default function ModalAddLocation({ open }) {
  const {
    onChangeAddLocation,
    setOnChangeAddLocation,
    handleOnChangeAddLocation,
    addPinLocation,
    setAddPin,
    setIsMark
  } = useMap();

  return (
    <>
      {open && (
        <div className="flex justify-center items-center">
          <form className="flex flex-col gap-8  top-0 left-0 right-0 w-full rounded-3xl h-[320px] justify-center items-center bg-Primary-lightest ">
            <div className="flex flex-col items-end gap-4 ">
              <InputAddPinLocationForm
                value={onChangeAddLocation.stationName}
                onChange={(event) => {
                  handleOnChangeAddLocation(event);
                }}
                name={"stationName"}
                title="Name"
              />
              <InputAddPinLocationForm
                value={onChangeAddLocation.latitude}
                onChange={(event) => {
                  handleOnChangeAddLocation(event);
                }}
                name={"latitude"}
                title="Latitude"
              />
              <InputAddPinLocationForm
                value={onChangeAddLocation.longitude}
                onChange={(event) => {
                  handleOnChangeAddLocation(event);
                }}
                name={"longitude"}
                title="Longitude"
              />
              <InputAddPinLocationForm
                value={onChangeAddLocation.areaName}
                onChange={(event) => {
                  handleOnChangeAddLocation(event);
                }}
                name={"areaName"}
                title="Area"
              />
            </div>
            <div className="flex  gap-5">
              <PurpleButton
                onClick={(event) => {
                  event.preventDefault();
                  setAddPin()
                  setIsMark(false)
                  setOnChangeAddLocation({
                    stationName: "",
                    latitude: "",
                    longitude: "",
                    areaName: "",
                  });
                }}
                title="Reset"
              />
              <PurpleButton
                onClick={(event) => {
                  event.preventDefault();
                  addPinLocation(onChangeAddLocation);
                }}
                title="Confirm"
              />
            </div>
          </form>
        </div>
      )}
    </>
  );
}
