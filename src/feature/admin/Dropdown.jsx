import { useState } from "react";
import LocationPin from "../../feature/admin/LocationPin";
import axios from "../../config/axios";
import useMap from "../hook/use-map";
import { createAlert } from "../../utils/sweetAlert";
import Swal from "sweetalert2";
export default function Dropdown({
  setIsLocationModal,
  setIsOpenEditLocation,
  isOpenOn,
  setIsOpenOn,
  subArea,
  setIsOpenLocation,
  workarea,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [isHide, setIsHide] = useState(true);
  const { getSubArea, getWorkArea } = useMap();

  return (
    <>
      <div className="flex justify-between items-center gap-2 p-2">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center"
        >
          <p className="text-[18px] text-Primary-darker pl-8 font-semibold">
            {workarea && workarea.areaName}
          </p>
          <span className="material-symbols-outlined text-Primary-darker">
            expand_more
          </span>
        </button>
        <div className="flex pr-10 gap-5">
          <button
            onClick={(event) => {
              event.preventDefault();
              Swal.fire({
                title: "Do you want to delete?",
                showDenyButton: true,

                confirmButtonText: "Yes",
                denyButtonText: "No",
              }).then((result) => {
                if (result.isConfirmed) {
                  const deleteArea = axios
                    .post("/map/deletearea", { id: workarea.id })
                    .then((res) => {
                      getSubArea();
                      getWorkArea();
                    })
                    .catch((error) => {
                      console.log(error);
                    });

                  Swal.fire("Delete Complete!", "", "success");
                } else if (result.isDenied) {
                  Swal.fire("Cancel Delete", "", "info");
                }
              });
            }}
            className={`border-2 py-1 px-4 rounded-xl border-Primary-darker  
             
                text-MonoColor-50 bg-Primary-darker
                
            `}
          >
            Delete
          </button>
          <button
            onClick={(event) => {
              event.preventDefault();
              const changeStatus = axios
                .post("/map/hidearea", { workAreaId: workarea.id })
                .then((res) => {
                  console.log(res.data);
                  getSubArea();
                  getWorkArea();
                })
                .catch((error) => {
                  console.log(error);
                });
            }}
            className={`border-2 py-1 px-4 rounded-xl border-Primary-darker  ${
              workarea.status === false
                ? "text-MonoColor-50 bg-Primary-darker"
                : "text-Primary-darker"
            }`}
          >
            Hide
          </button>
        </div>
      </div>
      {isOpen && (
        <>
          {subArea ? (
            subArea.map((data, index) => {
              if (workarea.id === data.workArea.id) {
                return (
                  <LocationPin
                    key={index + 1}
                    dataLocation={data}
                    setIsLocationModal={setIsLocationModal}
                    isOpenOn={isOpenOn}
                    setIsOpenOn={setIsOpenOn}
                    setIsOpenEditLocation={setIsOpenEditLocation}
                    setIsOpenLocation={setIsOpenLocation}
                  />
                );
              }
              return "";
            })
          ) : (
            <LocationPin
              setIsLocationModal={setIsLocationModal}
              isOpenOn={isOpenOn}
              setIsOpenOn={setIsOpenOn}
              setIsOpenEditLocation={setIsOpenEditLocation}
              setIsOpenLocation={setIsOpenLocation}
            />
          )}
        </>
      )}
    </>
  );
}
