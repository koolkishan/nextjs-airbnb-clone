"use client";
import AuthModal from "airbnb/components/auth/AuthModal";
import CompactFooter from "airbnb/components/footer/CompactFooter";
import Navbar from "airbnb/components/navbar/Navbar";
import { userAppStore } from "airbnb/store/store";
import React, { useEffect } from "react";
import SearchMap from "./components/SearchMap";
import { getSearchListing } from "airbnb/lib/lisitng";
import ListingCard from "airbnb/components/listingCard";

export default function Page() {
  const { isAuthModalOpen, searchLocation, setSearchListings, searchListings } =
    userAppStore();
  useEffect(() => {
    const getData = async () => {
      const data = await getSearchListing(searchLocation.address);
      setSearchListings(data);
    };
    if (searchLocation) {
      getData();
    }
  }, [searchLocation, setSearchListings]);
  return (
    <div>
      <Navbar />
      <div
        className="grid h-[82.5vh]"
        style={{ gridTemplateColumns: "0.6fr 0.4fr" }}
      >
        <div className=" h-[82.5vh] overflow-auto no-scrollbar">
          <div className="grid grid-cols-3 px-20 gap-3 py-10 h-[75vh] overflow-auto no-scrollbar">
            {searchListings?.map((listing: any, index: number) => (
              <ListingCard data={listing} key={index} />
            ))}
          </div>
        </div>
        <div className="">
          <SearchMap />
        </div>
      </div>
      <CompactFooter />
      {isAuthModalOpen && <AuthModal />}
    </div>
  );
}
