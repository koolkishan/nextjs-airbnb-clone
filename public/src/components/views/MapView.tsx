import React, { useEffect, useState } from "react";
import Map from "react-map-gl";
import GeocoderControl from "../process/geocoder-control";
import { userAppStore } from "airbnb/store/store";

const TOKEN =
  "pk.eyJ1Ijoia29vbGtpc2hhbiIsImEiOiJjazV3Zm41cG8wa3I1M2tydnVkcW53b2ZpIn0.mYrXogbdTrWSoJECNR1epg";

export default function MapView() {
  const [mapData, setMapData] = useState([]);
  const { listings } = userAppStore();
  // useEffect(() => {
  //   const data = []
  //   listings.forEach((listing)=>{data.push()})
  // }, [listings]);
  return (
    <div
      className="h-[80vh] w-[100vw]
    "
    >
      <Map
        initialViewState={{
          longitude: 72.5714,
          latitude: 23.0225,
          zoom: 11,
        }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxAccessToken={TOKEN}
      >
        {/* {
          listings.map((listing)=>)
        } */}
      </Map>
    </div>
  );
}
