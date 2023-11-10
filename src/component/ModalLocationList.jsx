import { useState } from "react";
import Dropdown from "../feature/admin/Dropdown";
// import LocationPin from "../feature/admin/LocationPin";
import useMap from "../feature/hook/use-map";
import { number } from "joi";
import LocationPin from "../feature/admin/LocationPin";

export default function ModalLocationList({
  setIsLocationModal,
  setIsOpenEditLocation,
  open,
  isOpenOn,
  setIsOpenOn,
  setIsOpenLocation,
}) {
  const { subArea, getCircle } = useMap();
  const [isSearch, setIsSearch] = useState({
    search: "",
  });
  console.log(isSearch.search.length);
  const onChangeSearch = (event) => {
    setIsSearch({ ...isSearch, [event.target.name]: event.target.value });
    console.log(isSearch);
  };
  const searchStation = subArea?.filter((data) =>
    data.stationName?.includes(isSearch.search)
  );
  console.log(searchStation);
  return (
    <>
      {open && (
        <div className="bg-Primary-lightest relative rounded-3xl ">
          <div className="flex sticky top-0 left-0 right-0 gap-2 w-full rounded-3xl h-[120px] justify-center items-center bg-Primary-lightest ">
            <input
              onChange={(event) => {
                onChangeSearch(event);
              }}
              value={isSearch.search}
              name="search"
              type="text"
              className="bg-MonoColor-50 rounded-3xl w-[320px] h-[36px]  outline-non p-4"
              placeholder="search"
            />
            <span className="material-symbols-outlined text-MonoColor-50">
              search
            </span>
          </div>
          <div className="flex flex-col w-full h-[50vh] overflow-auto">
            {isSearch.search.length !== 0
              ? searchStation &&
                searchStation.map((data, index) => (
                  <LocationPin
                    key={index}
                    dataLocation={data}
                    setIsLocationModal={setIsLocationModal}
                    isOpenOn={isOpenOn}
                    setIsOpenOn={setIsOpenOn}
                    setIsOpenEditLocation={setIsOpenEditLocation}
                    setIsOpenLocation={setIsOpenLocation}
                  />
                ))
              : getCircle &&
                getCircle.area.map((workarea) => (
                  <Dropdown
                    key={workarea.id}
                    workarea={workarea}
                    setIsOpenLocation={setIsOpenLocation}
                    setIsLocationModal={setIsLocationModal}
                    setIsOpenEditLocation={setIsOpenEditLocation}
                    isOpenOn={isOpenOn}
                    setIsOpenOn={setIsOpenOn}
                    subArea={subArea}
                  />
                ))}
          </div>
        </div>
      )}
    </>
  );
}
