import React from "react";
import ListingCard from "../listingCard";
import { userAppStore } from "airbnb/store/store";

export default function ListView() {
  const { listings } = userAppStore();
  return (
    <div className="grid grid-cols-5 px-20 gap-10 py-10  justify-start items-start">
      {listings?.map((listing, index) => (
        <ListingCard data={listing} key={index} />
      ))}
    </div>
  );
}
