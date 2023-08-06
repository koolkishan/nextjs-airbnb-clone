import Pin from "airbnb/components/common/Pin";
import { userAppStore } from "airbnb/store/store";
import React, { useMemo } from "react";
import Map, { Marker } from "react-map-gl";

const TOKEN =
  "pk.eyJ1Ijoia29vbGtpc2hhbiIsImEiOiJjazV3Zm41cG8wa3I1M2tydnVkcW53b2ZpIn0.mYrXogbdTrWSoJECNR1epg";

export default function ListingMap() {
  const { currentListing } = userAppStore();
  const pins = useMemo(() => {
    return (
      <Marker
        longitude={currentListing.mapData.longitude}
        latitude={currentListing.mapData.latitude}
      >
        <Pin />
      </Marker>
    );
  }, [currentListing]);
  return (
    <div className="h-96 w-full">
      <Map
        initialViewState={{
          longitude: currentListing.mapData.longitude,
          latitude: currentListing.mapData.latitude,
          zoom: 13,
        }}
        scrollZoom={false}
        dragPan={false}
        dragRotate={false}
        doubleClickZoom={false}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxAccessToken={TOKEN}
      >
        {pins}
      </Map>
    </div>
  );
}
