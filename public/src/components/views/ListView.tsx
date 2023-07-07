import React from "react";
import ListingCard from "../listingCard";
import { userAppStore } from "airbnb/store/store";

export default function ListView() {
  const { listings } = userAppStore();
  return (
    <div className="grid grid-cols-4 px-20 gap-3 py-10 h-[75vh] overflow-auto no-scrollbar">
      {listings?.map((listing: any, index: number) => (
        <ListingCard data={listing} key={index} />
      ))}
      {listings?.map((listing: any, index: number) => (
        <ListingCard data={listing} key={index} />
      ))}
      {listings?.map((listing: any, index: number) => (
        <ListingCard data={listing} key={index} />
      ))}
      {listings?.map((listing: any, index: number) => (
        <ListingCard data={listing} key={index} />
      ))}
      {listings?.map((listing: any, index: number) => (
        <ListingCard data={listing} key={index} />
      ))}
    </div>
  );
}
