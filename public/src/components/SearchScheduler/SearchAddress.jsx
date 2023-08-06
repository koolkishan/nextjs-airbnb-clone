import useClickOutside from "airbnb/hooks/useClickOutside";
import { userAppStore } from "airbnb/store/store";
import axios from "axios";
import React, { useState } from "react";
import { MdLocationPin } from "react-icons/md";

export default function SearchAddress() {
  const { selectionType, setSelectionType, searchLocation, setSearchLocation } =
    userAppStore();
  const TOKEN =
    "pk.eyJ1Ijoia29vbGtpc2hhbiIsImEiOiJjazV3Zm41cG8wa3I1M2tydnVkcW53b2ZpIn0.mYrXogbdTrWSoJECNR1epg";
  const searchAddresses = async (query) => {
    try {
      const response = await axios.get(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${query}.json`,
        {
          params: {
            access_token: TOKEN,

            limit: 5,
            language: "en-US", // Specify the language for the results
          },
        }
      );

      const addresses = response.data.features.map((feature) => ({
        address: feature.text,
        latitude: feature.center[1],
        longitude: feature.center[0],
      }));
      setSearchedAddresss(addresses);
    } catch (error) {
      console.error("Error searching addresses:", error);
    }
  };
  const [searchText, setSearchText] = useState("");
  const [searchedAddresss, setSearchedAddresss] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [containerRef] = useClickOutside();

  return (
    <>
      <label htmlFor="" className="text-xs font-semibold">
        Where
      </label>
      <input
        type="text"
        placeholder="Search Destinations"
        className="bg-transparent focus:outline-none"
        value={searchText}
        onChange={(e) => {
          setSearchText(e.target.value);
          searchAddresses(e.target.value);
        }}
      />
      {selectionType === "where" && searchedAddresss.length > 0 && (
        <div
          className="absolute w-96 left-0 h-96 top-24 shadow-lg rounded-3xl bg-white py-10 z-50"
          ref={containerRef}
        >
          <ul className="flex gap-0 flex-col">
            {searchedAddresss?.map((address, index) => (
              <li
                key={index}
                className="hover:bg-gray-300 transition-all duration-300 py-2"
                onClick={() => {
                  setSelectedAddress(address);
                  setSearchText(address.address);
                  setSearchedAddresss([]);
                  setSelectionType(undefined);
                  setSearchLocation(address);
                }}
              >
                <div
                  className="px-10 grid gap-10 items-center justify-start"
                  style={{ gridTemplateColumns: "10fr 90fr" }}
                >
                  <span className="h-12 w-12 rounded-md bg-gray-100 flex items-center justify-center text-2xl">
                    <MdLocationPin />
                  </span>
                  <span className="truncate">{address.address}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
