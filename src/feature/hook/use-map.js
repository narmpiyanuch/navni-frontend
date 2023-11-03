import { useContext } from "react";
import { MapContext } from "../../context/MapContext";


export default function useMap() {
  return (
    useContext(MapContext)
  )
}
