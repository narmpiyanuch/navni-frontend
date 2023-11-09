import InputAddPinLocationForm from "../feature/admin/InputAddPinLocationForm";
import useMap from "../feature/hook/use-map";
import PurpleButton from "../feature/payment/PurpleButton";
import axios from "../config/axios";
import { createErrorSweetAlert } from "../utils/sweetAlert";

export default function ModalAddArea({
  open,
  setIsLocationModal,
  setIsOpenAddArea,
}) {
  const {
    onChangeAddArea,
    handleOnChangeAddArea,
    setOnChangeAddArea,
    addWorkArea,getWorkArea
  } = useMap();
  return (
    <>
      {open && (
        <div className="flex justify-center items-center">
          <form className="flex flex-col gap-8  top-0 left-0 right-0 w-full rounded-3xl h-[320px] justify-center items-center bg-Primary-lightest ">
            <div className="flex flex-col items-end gap-4 ">
              <InputAddPinLocationForm
                value={onChangeAddArea.area_name}
                onChange={(event) => {
                  handleOnChangeAddArea(event);
                }}
                name={"area_name"}
                title="Name"
              />
              <InputAddPinLocationForm
                value={onChangeAddArea.latitude}
                onChange={(event) => {
                  handleOnChangeAddArea(event);
                }}
                name={"latitude"}
                title="Latitude"
              />
              <InputAddPinLocationForm
                value={onChangeAddArea.longitude}
                onChange={(event) => {
                  handleOnChangeAddArea(event);
                }}
                name={"longitude"}
                title="Longitude"
              />
              <InputAddPinLocationForm
                value={onChangeAddArea.radius}
                onChange={(event) => {
                  handleOnChangeAddArea(event);
                }}
                name={"radius"}
                title="Radius"
              />
            </div>
            <div className="flex gap-5">
              <PurpleButton
                onClick={(event) => {
                  event.preventDefault();
                  console.log("first");
                  setOnChangeAddArea({
                    area_name: "",
                    latitude: "",
                    longitude: "",
                    radius: "500",
                  });
                  console.log(onChangeAddArea);
                }}
                title="Reset"
              />
              <PurpleButton
                onClick={(event) => {
                  event.preventDefault();
                  if(onChangeAddArea.area_name===""){
                    return createErrorSweetAlert("Name","Please fill in Name")
                  }

                  if(onChangeAddArea.latitude===""&&onChangeAddArea.longitude===""){
                    return createErrorSweetAlert("Please select Area in Map")
                  }

                  axios
                    .post("/map/add", onChangeAddArea)
                    .then((res) => {
                      getWorkArea();
                      console.log(res.data);
                      setOnChangeAddArea({
                        area_name: "",
                        latitude: "",
                        longitude: "",
                        radius: "500",
                      });
                      setIsOpenAddArea(false);
                      setIsLocationModal(true);
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
