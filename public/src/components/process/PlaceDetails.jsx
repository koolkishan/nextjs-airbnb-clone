import React, { useState } from "react";
import FormInput from "../common/FormInput";

import { userAppStore } from "airbnb/store/store";

export default function PlaceDetails() {
  const { locationData, setLocationData } = userAppStore();
  const handleChange = (name, value) => {
    setLocationData({ ...locationData, [name]: value });
  };

  return (
    <div className="flex justify-center items-center h-full flex-col gap-2 w-full">
      <div className="flex flex-col gap-3">
        <h2 className="font-semibold text-4xl">Confirm your address</h2>
        <p>
          Your address is only shared with guests after they’ve made a
          reservation.
        </p>
      </div>
      <div className="flex flex-col w-full items-center gap-3 h-full overflow-auto no-scrollbar pb-20 pt-5">
        <div className="flex flex-col gap-2 w-[30%]">
          <FormInput
            isListing
            name="country"
            placeholder="Country"
            setValue={handleChange}
            type="text"
            value={locationData?.country}
          />
          <FormInput
            isListing
            name="neighborhood"
            placeholder="House, flat, bldg, etc."
            setValue={handleChange}
            type="text"
            value={locationData?.neighborhood}
          />
        </div>
        <div className="flex flex-col gap-2 w-[30%]">
          <FormInput
            isListing
            name="place"
            placeholder="Area/village (if applicable)"
            setValue={handleChange}
            type="text"
            value={locationData?.place}
          />{" "}
          <FormInput
            isListing
            name="locality"
            placeholder="Street Address"
            setValue={handleChange}
            type="text"
            value={locationData?.locality}
          />
        </div>
        <div className="flex flex-col gap-2 w-[30%]">
          <FormInput
            isListing
            name="landmark"
            placeholder="Nearby landmark (if applicable)"
            setValue={handleChange}
            type="text"
            value={locationData?.landmark}
          />{" "}
          <FormInput
            isListing
            name="district"
            placeholder="City / town"
            setValue={handleChange}
            type="text"
            value={locationData?.district}
          />
        </div>
        <div className="flex flex-col gap-2 w-[30%]">
          <FormInput
            isListing
            name="postcode"
            placeholder="PIN code"
            setValue={handleChange}
            type="text"
            value={locationData?.postcode}
          />{" "}
          <FormInput
            isListing
            name="country"
            placeholder="Country / province"
            setValue={handleChange}
            type="text"
            value={locationData?.country}
          />
        </div>
      </div>
    </div>
  );
}
