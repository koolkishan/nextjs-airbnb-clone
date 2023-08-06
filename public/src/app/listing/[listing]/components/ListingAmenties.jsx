import { AmenetiesType } from "airbnb/data/Amenities";
import { userAppStore } from "airbnb/store/store";
import React from "react";

export default function ListingAmenties() {
  const { currentListing } = userAppStore();
  function getSvgPathByName(name) {
    for (const amenity of AmenetiesType) {
      for (const data of amenity.data) {
        if (data.name === name) {
          return data.svgPath;
        }
      }
    }
    return null;
  }

  return (
    <div className="flex flex-col gap-2">
      <h4 className="text-xl font-semibold ">Amenties</h4>
      <ul className="grid grid-cols-5 gap-2">
        {currentListing.placeAmeneites.map((amenity) => (
          <li
            key={amenity}
            className="border border-gray-300 p-3 rounded-lg flex flex-col justify-start items-start"
          >
            {getSvgPathByName(amenity)}
            <span>{amenity}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
