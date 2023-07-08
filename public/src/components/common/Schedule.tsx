import axios from "axios";
import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { DateRange, Range, RangeKeyDict } from "react-date-range";

import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
export default function Schedule() {
  const TOKEN =
    "pk.eyJ1Ijoia29vbGtpc2hhbiIsImEiOiJjazV3Zm41cG8wa3I1M2tydnVkcW53b2ZpIn0.mYrXogbdTrWSoJECNR1epg";
  const searchAddresses = async (query) => {
    try {
      const response = await axios.get(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${query}.json`,
        {
          params: {
            access_token: TOKEN,
            // types: "address",
            limit: 5,
            language: "en-US", // Specify the language for the results
            // countries: "", // Leave empty to search globally
          },
        }
      );
      // Process the response and extract the addresses

      const addresses = response.data.features.map((feature) => ({
        address: feature.text,
        latitude: feature.center[1],
        longitude: feature.center[0],
      }));
      // Do something with the addresses (e.g., update state)
      setSearchedAddresss(addresses);
      console.log(addresses);
    } catch (error) {
      console.error("Error searching addresses:", error);
    }
  };
  const [selected, setSelected] = useState<null | string>(null);
  const [searchText, setSearchText] = useState("");
  const [searchedAddresss, setSearchedAddresss] = useState([]);
  return (
    <div className="flex rounded-full border border-gray-300 text-airbnb-light-black">
      <div
        className="flex flex-col hover:bg-gray-100 px-10 py-4 rounded-full cursor-pointer relative"
        onClick={() => setSelected("where")}
      >
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
        <div className="absolute w-96 left-0 h-96 top-24 shadow-lg rounded-3xl bg-white">
          <ul>
            {searchedAddresss?.map((address, index) => (
              <li key={index}>{address.address}</li>
            ))}
          </ul>
        </div>
      </div>
      <div
        className="flex flex-col hover:bg-gray-100 px-10 py-4 rounded-full cursor-pointer "
        onClick={() => setSelected("check-in")}
      >
        <label htmlFor="" className="text-xs font-semibold">
          Check in
        </label>
        <span>13 Jul</span>
        <DateRange
          rangeColors={["#262626"]}
          //   ranges={[value]}
          date={new Date()}
          //   onChange={onChange}
          direction="vertical"
          showDateDisplay={false}
          minDate={new Date()}
          //   disabledDates={disabledDates}
        />
      </div>
      <div
        className="flex flex-col hover:bg-gray-100 px-10 py-4 rounded-full cursor-pointer"
        onClick={() => setSelected("check-out")}
      >
        <label htmlFor="" className="text-xs font-semibold">
          Check out
        </label>
        <span>22 Jul</span>
      </div>
      <div
        className="flex hover:bg-gray-100 justify-between px-4 py-4 pl-7 rounded-full cursor-pointer gap-7"
        onClick={() => setSelected("who")}
      >
        <div className="flex flex-col">
          <label htmlFor="" className="text-xs font-semibold">
            Who
          </label>
          <span>4 guests</span>
        </div>
        <button className="bg-airbnb-theme-color p-3 rounded-full flex items-center justify-center text-white text-lg">
          <BiSearch />
        </button>
      </div>
    </div>
  );
}
