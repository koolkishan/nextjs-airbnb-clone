import { AmenetiesType } from "airbnb/data/Amenities";
import { userAppStore } from "airbnb/store/store";
import React from "react";

export default function ProcessAmeneties() {
  const { placeAmeneites, setPlaceAmenities } = userAppStore();
  const addAmenety = (name) => {
    setPlaceAmenities([...placeAmeneites, name]);
  };
  const removeAmenty = (name) => {
    const index = placeAmeneites.findIndex((amenetiy) => amenetiy === name);
    if (index) {
      const clonedAmenties = [...placeAmeneites];
      clonedAmenties.splice(index, 1);
      setPlaceAmenities(clonedAmenties);
    }
  };
  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col gap-3">
        <h2 className="font-semibold text-4xl">
          Tell guests what your place has to offer
        </h2>
        <p>You can add more amenities after you publish your listing.</p>
        <div className="flex flex-col gap-5 max-h-[65vh] overflow-auto scroll no-scrollbar">
          {AmenetiesType.map(({ type, data }) => (
            <div key={type} className="flex flex-col gap-5">
              {type === "advanced" && (
                <span className="text-lg font-medium">
                  Do you have any standout amenities?
                </span>
              )}
              {type === "safety" && (
                <span className="text-md font-medium">
                  Do you have any of these safety items?
                </span>
              )}

              <div className="grid grid-cols-3 gap-5">
                {data.map(({ name, svgPath }) => (
                  <button
                    key={name}
                    className={` flex flex-col justify-start font-semibold border border-gray-300 rounded-md p-3 hover:border-gray-950 transition-all duration-300 ${
                      placeAmeneites?.find((amentiy) => amentiy === name) &&
                      "border-gray-950"
                    }`}
                    onClick={() => {
                      placeAmeneites?.includes(name)
                        ? removeAmenty(name)
                        : addAmenety(name);
                    }}
                  >
                    {svgPath}
                    <span className="text-airbnb-light-black font-medium">
                      {name}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
