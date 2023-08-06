"use client";
import AuthModal from "airbnb/components/auth/AuthModal";
import CompactFooter from "airbnb/components/footer/CompactFooter";
const Navbar = dynamic(() => import("airbnb/components/navbar/Navbar"), {
  ssr: false,
});

import { userAppStore } from "airbnb/store/store";
import React, { useEffect, useState } from "react";
import { getSearchListing, getUserListings } from "airbnb/lib/lisitng";
import ListingCard from "airbnb/components/listingCard";
import dynamic from "next/dynamic";

export default function Page() {
  const { isAuthModalOpen, userInfo, setUserListings, userListings } =
    userAppStore();
  useEffect(() => {
    const getData = async () => {
      const data = await getUserListings(userInfo?.id);
      setUserListings(data);
    };
    if (userInfo) {
      getData();
    }
  }, [userInfo, setUserListings]);
  return (
    <div>
      <Navbar />
      <div className=" flex justify-start items-start">
        {userListings.length > 0 ? (
          <div className="grid grid-cols-4 px-10 gap-3 py-10   w-full items-start ">
            {userListings?.map((listing, index) => (
              <ListingCard data={listing} key={index} isMyListing />
            ))}
          </div>
        ) : (
          <div className="flex items-center justify-center w-full h-full">
            <h1>No Listings for current user. Create new Listings.</h1>
          </div>
        )}
      </div>
      <CompactFooter />
    </div>
  );
}
