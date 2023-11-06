import { useState } from "react";
import { createContext } from "react";
import { useEffect } from "react";
import axios from "../config/axios";
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

  const [pickup,setPickup] = useState()
  const [drop,setDrop] = useState()

  const [isOpenPin, setIsOpenPin] = useState(false);
  const [areaPin,setAreaPin]=useState()

const [price,setPrice]= useState()
  useEffect(() => {
    if (selectArea) {
      axios
        .post("/map/select-area", { id: selectArea.id })
        .then((res) => {
          
          console.log(res.data.toStation);
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
          console.log(res.data.toStation);
          setAreaFrom(res.data.toStation);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    if (areaFromByTo!==undefined) {
      axios
        .post("/map/select-area", { id: areaFromByTo.id })
        .then((res) => {
          console.log(res.data.toStation);
          setAreaFrom(res.data.toStation);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [selectAreaTo, areaFromByTo]);

  useEffect(()=>{
if(drop&&pickup){
// console.log(pickup)
  const price = axios.post('/map/calculate',{
    destination:drop,origin:pickup
  }).then((res)=>{
    console.log(res.data.price)
    setPrice(res.data.price)
  }).catch((error)=>{
    console.log(error)
  })
}
  },[drop,pickup])


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
        setPickup,
        pickup,
        drop,
        setDrop,
        setIsOpenPin,
        isOpenPin,
        setAreaPin,
        areaPin
      }}
    >
      {children}
    </MapContext.Provider>
  );
}
