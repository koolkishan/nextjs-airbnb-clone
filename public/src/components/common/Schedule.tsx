import axios from "axios";
import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";

import { MdLocationPin } from "react-icons/md";
import { addDays } from "date-fns";

import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import Calender from "./Calender";
import SearchAddress from "../SearchScheduler/SearchAddress";
import { userAppStore } from "airbnb/store/store";
import SearchBeds from "../SearchScheduler/SearchBeds";
import { useRouter } from "next/navigation";
import useClickOutside from "airbnb/hooks/useClickOutside";
export default function Schedule() {
  const router = useRouter();
  const {
    selectionType,
    setSelectionType,
    setShowScheduleBar,
    showScheduleBar,
  } = userAppStore();
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);

  function formatDate(dateString) {
    const options = { month: "long", day: "numeric" };
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", options);
  }

  const handleSearch = () => {
    setSelectionType(undefined);
    if (showScheduleBar) {
      setShowScheduleBar();
    }
    router.push("/search");
  };
  const [containerRef] = useClickOutside(true);

  return (
    <div
      className="flex rounded-full border border-gray-300 text-airbnb-light-black relative"
      ref={containerRef}
    >
      <div
        className="flex flex-col hover:bg-gray-100 px-10 py-4 rounded-full cursor-pointer relative"
        onClick={() => setSelectionType("where")}
      >
        <SearchAddress />
      </div>
      <div
        onClick={() => setSelectionType("check-in")}
        className="flex flex-col hover:bg-gray-100 px-10 py-4 rounded-full cursor-pointer items-center justify-center"
      >
        <label htmlFor="" className="text-xs font-semibold flex flex-col    ">
          Check in
        </label>
        <span>{formatDate(state[0]?.startDate)}</span>
        {selectionType === "check-in" && (
          <div className="absolute top-28 left-0 shadow-xl z-[400]">
            <Calender state={state} setState={setState} />
          </div>
        )}
      </div>
      <div
        className="flex flex-col hover:bg-gray-100 px-10 py-4 rounded-full cursor-pointer items-center justify-center"
        onClick={() => setSelectionType("check-out")}
      >
        <label htmlFor="" className="text-xs font-semibold">
          Check out
        </label>
        <span>{formatDate(state[0]?.endDate)}</span>
        {selectionType === "check-out" && (
          <div className="absolute top-28 left-0 shadow-xl z-[400]">
            <Calender state={state} setState={setState} />
          </div>
        )}
      </div>
      <div
        className="flex hover:bg-gray-100 justify-between px-4 py-4 pl-7 rounded-full cursor-pointer gap-7"
        onClick={() => setSelectionType("who")}
      >
        <SearchBeds />
        <button
          className="bg-airbnb-theme-color p-3 rounded-full flex items-center justify-center text-white text-lg"
          onClick={handleSearch}
        >
          <BiSearch />
        </button>
      </div>
    </div>
  );
}
