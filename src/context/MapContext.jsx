import { useState } from "react";
import { createContext } from "react";
import { useEffect } from "react";
import axios from "../config/axios";
import { flushSync } from "react-dom";
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

  const [pickup, setPickup] = useState();
  const [drop, setDrop] = useState();

  const [isOpenPin, setIsOpenPin] = useState(false);
  const [areaPin, setAreaPin] = useState();

  const [price, setPrice] = useState();

  const [addPin, setAddPin] = useState();

  const [isMark, setIsMark] = useState(false);

  const [editLocation, setEditLocation] = useState();
  const [onChangeEditLocation, setOnchangeEditLocation] = useState({
    stationName: "",
    latitude: "",
    longitude: "",
    areaName: "",
  });

  const [onChangeAddLocation, setOnChangeAddLocation] = useState({
    stationName: "",
    latitude: "",
    longitude: "",
    areaName: "",
    workAreaId: "",
  });

  const [onChangeAddArea, setOnChangeAddArea] = useState({
    area_name: "",
    latitude: "",
    longitude: "",
    radius: "500",
  });

  const [isCircle, openIsCircle] = useState(false);

  const [getCircle, setGetCircle] = useState();

  const getWorkArea = () => {
    axios.get("/map/get-area").then((res) => {
      setGetCircle(res.data);
    });
  };

  const handleOnChangeAddArea = (event) => {
    setOnChangeAddArea({
      ...onChangeAddArea,
      [event.target.name]: event.target.value,
    });
    console.log(onChangeAddArea);
  };

  const handleOnChangeAddLocation = (event) => {
    setOnChangeAddLocation({
      ...onChangeAddLocation,
      [event.target.name]: event.target.value,
    });
  };

  const handleOnChangeEditLocation = (event) => {
    setOnchangeEditLocation({
      ...onChangeEditLocation,
      [event.target.name]: event.target.value,
    });
  };

  const addWorkArea = async (input) => {
    axios
      .post("/map/add", input)
      .then(() => {
        getWorkArea();
        // console.log(res.data)
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const addPinLocation = (input) => {
    axios
      .post("/map/add/sub", input)
      .then(() => {
        // console.log(res.data);
        getSubArea();
        setOnChangeAddLocation({
          stationName: "",
          latitude: "",
          longitude: "",
          areaName: "",
          workAreaId: "",
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getSubArea = () => {
    axios
      .get("/map/get-subarea")
      .then((res) => {
        setSubArea(res.data.subAreaStation);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const editStationName = async (input) => {
    axios
      .post("/map/edit-station-name", input)
      .then(() => {
        getSubArea();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    if (selectArea) {
      axios
        .post("/map/select-area", { id: selectArea.id })
        .then((res) => {
          // console.log(res.data.toStation);
          setSubAreaTo(res.data.toStation);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [selectArea]);

  useEffect(() => {
    if (selectAreaTo) {
      axios
        .post("/map/select-area", { id: selectAreaTo.id })
        .then((res) => {
          // console.log(res.data.toStation);
          setAreaFrom(res.data.toStation);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    if (areaFromByTo !== undefined) {
      axios
        .post("/map/select-area", { id: areaFromByTo.id })
        .then((res) => {
          // console.log(res.data.toStation);
          setAreaFrom(res.data.toStation);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [selectAreaTo, areaFromByTo]);

  useEffect(() => {
    if (drop && pickup) {
      // console.log(pickup)
      axios
        .post("/map/calculate", {
          destination: drop,
          origin: pickup,
        })
        .then((res) => {
          // console.log(res.data.price);
          setPrice(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [drop, pickup]);

  return (
    <MapContext.Provider
      value={{
        areaFrom,
        setAreaFrom,
        areaFromByTo,
        setAreaFromByTo,
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
        setPickup,
        pickup,
        drop,
        setDrop,
        setIsOpenPin,
        isOpenPin,
        setAreaPin,
        areaPin,
        setEditLocation,
        editLocation,
        onChangeEditLocation,
        setOnchangeEditLocation,
        setAddPin,
        addPin,
        setOnChangeAddLocation,
        onChangeAddLocation,
        handleOnChangeAddLocation,
        addPinLocation,
        setIsMark,
        isMark,
        getSubArea,
        handleOnChangeAddArea,
        onChangeAddArea,
        setOnChangeAddArea,
        isCircle,
        openIsCircle,
        addWorkArea,
        setGetCircle,
        getCircle,
        getWorkArea,
        handleOnChangeEditLocation,
        editStationName,
        price,
      }}
    >
      {children}
    </MapContext.Provider>
  );
}
