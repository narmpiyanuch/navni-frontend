import { useLoadScript, GoogleMap, MarkerF } from "@react-google-maps/api";
import { GOOGLE_KEY } from "../../config/env";
import { useEffect } from "react";
import axios from "../../config/axios";
import useMap from "../hook/use-map";
import { CircleF } from "@react-google-maps/api";
import { Circle } from "@react-google-maps/api";
import { useState } from "react";
const center = { lat: 13.758565011499037, lng: 100.53493916642331 };
const navNiPin = "../../src/assets/purplePin.png";

export default function MapAdmin({isOpenAddLocation}) {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: GOOGLE_KEY,
  });
  const { subArea, setSubArea ,addPin,setAddPin,onChangeAddLocation,setOnChangeAddLocation,setIsMark,isMark,getSubArea} = useMap();
  useEffect(()=>{
    if(!isOpenAddLocation){
      console.log('first')
      setAddPin()
      getSubArea()
      setIsMark(!isMark)
    }

  },[isOpenAddLocation])
  
  useEffect(() => {
    getSubArea()
  }, []);

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
        clickableIcons:false    
      }
    }
    onClick={(event)=>{
      setIsMark(true)
      setAddPin({lat:event.latLng.lat(),lng:event.latLng.lng()})
      setOnChangeAddLocation({...onChangeAddLocation,latitude:event.latLng.lat(),longitude:event.latLng.lng()})
      console.log(onChangeAddLocation)
    }}
    >
      {/* <MarkerF
        position={center}
        icon={{
          url: navNiPin,
          scaledSize: new window.google.maps.Size(40, 40),
          origin: new window.google.maps.Point(0, 0),
          anchor: new window.google.maps.Point(15, 15),
        }}
      /> */}
      {subArea &&
        subArea.map((area) => {
          return (
            <>
              <MarkerF
                onClick={() => {
                  
                }}
                key={area.id}
                position={{ lat: +area.latitude, lng: +area.longitude }}
                icon={{
                  url: navNiPin,
                  scaledSize: new window.google.maps.Size(40, 40),
                  origin: new window.google.maps.Point(0, 0),
                  anchor: new window.google.maps.Point(15, 15),
                }}
              />
              
              {/* <Circle
                center={{ lat: +area.latitude, lng: +area.longitude }}
                radius={100}
                options={{
                  fillOpacity: 0.05,
                  strokeOpacity:0.3,
                  fillColor: "green"
                }}
              /> */}
            </>
          );
        })}

          {
           isOpenAddLocation&& ( isMark && <MarkerF
            position={addPin}
            icon={{
              url: navNiPin,
              scaledSize: new window.google.maps.Size(40, 40),
              origin: new window.google.maps.Point(0, 0),
              anchor: new window.google.maps.Point(15, 15),
            }}/>)
          }
    </GoogleMap>
  );
}
