import useClickOutside from "airbnb/hooks/useClickOutside";
import { userAppStore } from "airbnb/store/store";
import React, { useEffect, useRef } from "react";

export default function SearchBeds() {
  const { selectionType, searchPlaceSpace, setSearchPlaceSpace } =
    userAppStore();
  const handleIncrement = (type) => {
    setSearchPlaceSpace({
      ...searchPlaceSpace,
      [type]: searchPlaceSpace[type] + 1,
    });
  };

  const handleDecrement = (type) => {
    if (searchPlaceSpace[type] > 1) {
      setSearchPlaceSpace({
        ...searchPlaceSpace,
        [type]: searchPlaceSpace[type] - 1,
      });
    }
  };
  const [containerRef] = useClickOutside();

  return (
    <>
      <div className="flex flex-col">
        <label htmlFor="" className="text-xs font-semibold">
          Who
        </label>
        <span>
          {searchPlaceSpace.adults +
            searchPlaceSpace.childrens +
            searchPlaceSpace.infants +
            " "}
          guests
        </span>
      </div>
      {selectionType === "who" && (
        <div
          className="absolute w-96 right-0 h-max top-24 shadow-lg rounded-3xl bg-white py-10 px-10 z-50"
          ref={containerRef}
        >
          <ul className="flex flex-col gap-5">
            {Object.keys(searchPlaceSpace).map((place) => (
              <li
                className="flex justify-between w-full text-lg items-center"
                key={place}
              >
                <span className="capitalize ">{place}</span>
                <div className="flex gap-3 items-center justify-between w-48">
                  <button
                    className="border border-gray-200 py-[10px] rounded-full px-5 flex items-center justify-center hover:border-gray-500"
                    onClick={() => handleDecrement(place)}
                  >
                    -
                  </button>
                  <span className="min-w-[20px]">
                    {searchPlaceSpace[place]}
                  </span>
                  <button
                    className="border border-gray-200 py-[10px] rounded-full px-[18px] flex items-center justify-center hover:border-gray-500"
                    onClick={() => handleIncrement(place)}
                  >
                    +
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
