import { useContext } from "react";
import { DriverContext } from "../../context/DriverContext";

export default function useDriver() {
    return useContext(DriverContext);
}
