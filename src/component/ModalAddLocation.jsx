import InputAddPinLocationForm from "../feature/admin/InputAddPinLocationForm";
import useMap from "../feature/hook/use-map";
import PurpleButton from "../feature/payment/PurpleButton";
import { createErrorSweetAlert } from "../utils/sweetAlert";
import axios from "../config/axios";

export default function ModalAddLocation({
  open,
  setIsLocationModal,
  setIsOpenAddLocation,
}) {
  const {
    onChangeAddLocation,
    setOnChangeAddLocation,
    handleOnChangeAddLocation,
    addPinLocation,
    setAddPin,
    setIsMark,
    getSubArea,
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
                disabled={'disabled'}
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
                disabled={'disabled'}
              />
              <InputAddPinLocationForm
                value={onChangeAddLocation.areaName}
                onChange={(event) => {
                  handleOnChangeAddLocation(event);
                }}
                name={"areaName"}
                title="Area"
                disabled={'disabled'}
              />
            </div>
            <div className="flex  gap-5">
              <PurpleButton
                onClick={(event) => {
                  event.preventDefault();
                  setAddPin();
                  setIsMark(false);
                  setOnChangeAddLocation({
                    stationName: "",
                    latitude: "",
                    longitude: "",
                    areaName: "",
                    workAreaId: "",
                  });
                }}
                title="Reset"
              />
              <PurpleButton
                onClick={(event) => {
                  event.preventDefault();
                  if(onChangeAddLocation.stationName===""){
                   return createErrorSweetAlert('Name','Please fill in Name')
                  }
                  if(onChangeAddLocation.latitude===""&&onChangeAddLocation.longitude===""&&onChangeAddLocation.areaName===""){
                    return createErrorSweetAlert('Please select location in Map')
                  }
                  axios
                    .post("/map/add/sub", onChangeAddLocation)
                    .then((res) => {
                      console.log(res.data);
                      getSubArea();
                      setOnChangeAddLocation({
                        stationName: "",
                        latitude: "",
                        longitude: "",
                        areaName: "",
                        workAreaId: "",
                      });
                      setIsLocationModal(true);
                      setIsOpenAddLocation(false);
                    })
                    .catch((error) => {
                      
                      console.log(error);
                    });
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
