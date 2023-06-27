import React from "react";
import { HiOutlineSearch } from "react-icons/hi";
export default function ScheduleBar() {
  return (
    <div className="absolute flex items-center justify-center w-full h-full">
      <div className="flex items-center gap-5 border p-2 rounded-full w-max ">
        <span className="pl-5 cursor-pointer">Anywhere</span>
        <span className="cursor-pointer">Any week</span>
        <span className="cursor-pointer">Add guests</span>
        <span className=" bg-airbnb-theme-color flex items-center justify-center p-2 rounded-full cursor-pointer">
          <HiOutlineSearch className="text-white" />
        </span>
      </div>
    </div>
  );
}
