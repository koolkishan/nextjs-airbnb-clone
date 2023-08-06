"use client";
import React from "react";
import { BsFillMapFill } from "react-icons/bs";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { userAppStore } from "airbnb/store/store";

function ViewSwitchBadge() {
  const { isMapView, setMapView } = userAppStore();

  return (
    <div className="fixed flex justify-center items-center bottom-16 left-0 right-0 cursor-pointer">
      <div className=" bg-black px-4 py-4 text-white  rounded-full ">
        <span
          className="flex items-center gap-2 text-sm"
          onClick={() => setMapView()}
        >
          {!isMapView ? (
            <>
              Show Map <BsFillMapFill />
            </>
          ) : (
            <>
              Show List <AiOutlineUnorderedList />
            </>
          )}
        </span>
      </div>
    </div>
  );
}

export default ViewSwitchBadge;
