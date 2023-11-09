import { useLoadScript, GoogleMap, Marker } from "@react-google-maps/api";
import { GOOGLE_KEY } from "../../config/env";
import { useEffect } from "react";
import useMap from "../hook/use-map";
import { CircleF } from "@react-google-maps/api";
import { Circle } from "@react-google-maps/api";
const center = { lat: 13.758565011499037, lng: 100.53493916642331 };
const navNiPin = "../../src/assets/purplePin.png";

export default function MapAdmin({ isOpenAddLocation, isOpenAddArea }) {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: GOOGLE_KEY,
  });
  const {
    subArea,
    setOnChangeAddArea,
    addPin,
    setAddPin,
    onChangeAddLocation,
    setOnChangeAddLocation,
    setIsMark,
    isMark,
    getSubArea,
    onChangeAddArea,
    isCircle,
    openIsCircle,
    getCircle,
    getWorkArea,
  } = useMap();
  useEffect(() => {
    if (!isOpenAddLocation) {
      console.log("first");
      setAddPin();
      getSubArea();
      setIsMark(false);
    }
  }, [isOpenAddLocation]);

  useEffect(() => {
    getSubArea();
    getWorkArea();
  }, []);

  const OpenArea = subArea?.filter((area)=>(area.status===true))

  if (!isLoaded) {
    return <div>Loading....</div>;
  }
  return (
    <GoogleMap
      zoom={15}
      center={center}
      mapContainerClassName={"google-map"}
      options={{
        disableDoubleClickZoom: true,
        zoomControl: false,
        scrollwheel: true,
        mapTypeControl: false,
        fullscreenControl: false,
        streetViewControl: false,
        clickableIcons: false,
      }}
      onClick={(event) => {
        if (isOpenAddArea) {
          openIsCircle(true);
          setOnChangeAddArea({
            ...onChangeAddArea,
            latitude: event.latLng.lat(),
            longitude: event.latLng.lng(),
          });
          console.log(onChangeAddArea);
        }
      }}
    >
      {OpenArea &&
        OpenArea.map((area) => {
          return (
            <Marker
              onClick={() => {}}
              key={area.id}
              position={{ lat: +area.latitude, lng: +area.longitude }}
              icon={{
                url: navNiPin,
                scaledSize: new window.google.maps.Size(40, 40),
                origin: new window.google.maps.Point(0, 0),
                anchor: new window.google.maps.Point(15, 15),
              }}
            />
          );
        })}

      {isOpenAddLocation && isMark && (
        <Marker
          position={addPin}
          icon={{
            url: navNiPin,
            scaledSize: new window.google.maps.Size(40, 40),
            origin: new window.google.maps.Point(0, 0),
            anchor: new window.google.maps.Point(15, 15),
          }}
        />
      )}
      {isOpenAddArea && isCircle && (
        <Circle
          center={{
            lat: +onChangeAddArea.latitude,
            lng: +onChangeAddArea.longitude,
          }}
          radius={+onChangeAddArea.radius}
          options={{
            fillOpacity: 0.1,
            strokeColor: "green",
            strokeOpacity: 0.1,
            fillColor: "green",
          }}
          onClick={(event) => {
            console.log(event.latLng.lat());
          }}
        />
      )}
      {getCircle &&
        getCircle.area.map((area) => {
          return (
            <Circle
              radius={+area.radius}
              key={area.id}
              center={{ lat: +area.latitude, lng: +area.longitude }}
              options={{
                fillOpacity: 0.1,
                strokeColor: "green",
                strokeOpacity: 0.1,
                fillColor: "green",
              }}
              onClick={(event) => {
                if (isOpenAddLocation) {
                  setIsMark(true);
                  setAddPin({
                    lat: event.latLng.lat(),
                    lng: event.latLng.lng(),
                  });
                  setOnChangeAddLocation({
                    ...onChangeAddLocation,
                    latitude: event.latLng.lat(),
                    longitude: event.latLng.lng(),
                    workAreaId: area.id,
                    areaName: area.areaName,
                  });
                }
              }}
            />
          );
        })}
    </GoogleMap>
  );
}
