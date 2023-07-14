import { userAppStore } from "airbnb/store/store";
import Daimond from "airbnb/svg/daimond";
import React from "react";
import { BsFillFlagFill } from "react-icons/bs";

export default function TripScheduler() {
  const { currentListing } = userAppStore();
  return (
    <div className="sticky top-0 w-full flex flex-col gap-6 items-center justify-center">
      <div className=" border border-gray-400 rounded-lg shadow-lg flex p-4 gap-2 items-start px-8 flex-col w-full">
        <div className="flex gap-1">
          <span>${currentListing.price}</span>
          <span>night</span>
        </div>
        <div>dates</div>
        <button className="bg-airbnb-gradient py-3 mt-5  px-5 text-white text-base font-medium rounded-md cursor-pointer w-full">
          Reserve
        </button>
        <span className="text-center w-full">You won't be charged yet</span>
        <div className="flex  justify-between w-full">
          <span>₹13,145 x 6 nights</span>
          <span>₹78,872</span>
        </div>
        <div className="flex  justify-between w-full">
          <span>Total before taxes</span>
          <span>₹78,872</span>
        </div>
      </div>
      <div className="flex border border-gray-400 rounded-lg p-4 gap-2 items-start px-8">
        <span>
          <strong>This is a rare find. </strong>
          {currentListing?.listingCreatedBy?.firstName}'s place on Airbnb is
          usually fully booked.
        </span>
        <Daimond />
      </div>
      <div className="flex gap-3 items-center cursor-pointer">
        <span>
          <BsFillFlagFill />
        </span>
        <span className="underline font-semibold">Report this listing</span>
      </div>
    </div>
  );
}
