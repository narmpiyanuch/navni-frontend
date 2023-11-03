import { useState } from "react";
import { createContext } from "react";

export const MapContext = createContext();

export default function MapContextProvider({ children }) {
  const [subArea, setSubArea] = useState();
  const [selectArea, setSelectArea] = useState();
  const [subAreaTo, setSubAreaTo] = useState();
  const [selectAreaTo, setSelectAreaTo] = useState();
  const [selectAreaFromTo, setSelectAreaFromTo] = useState();
  const [selectAreaByTo, setSelectAreaByTo] = useState();

  const [areaFrom, setAreaFrom] = useState();
  const [areaFromByTo, setAreaFromByTo] = useState();

  return (
    <MapContext.Provider
      value={{
        areaFrom
        ,setAreaFrom
        ,areaFromByTo
        ,setAreaFromByTo,
        selectAreaByTo,
        setSelectAreaByTo,
        selectAreaFromTo,
        setSelectAreaFromTo,
        subArea,
        setSubArea,
        selectArea,
        setSelectArea,
        subAreaTo,
        setSubAreaTo,
        selectAreaTo,
        setSelectAreaTo,
      }}
    >
      {children}
    </MapContext.Provider>
  );
}
