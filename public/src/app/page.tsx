"use client";
import AuthModal from "airbnb/components/auth/AuthModal";
import CompactFooter from "airbnb/components/footer/CompactFooter";
import ListingCard from "airbnb/components/listingCard";
const Navbar = dynamic(() => import("airbnb/components/navbar/Navbar"), {
  ssr: false,
});

import ListView from "airbnb/components/views/ListView";
import MapView from "airbnb/components/views/MapView";
import ViewSwitchBadge from "airbnb/components/views/ViewSwitchBadge";
import { listingTypes } from "airbnb/data/listingTypes";
import { me } from "airbnb/lib/auth";
import { getAllListings, getUserWishlists } from "airbnb/lib/lisitng";
import { userAppStore } from "airbnb/store/store";
import dynamic from "next/dynamic";
import React, { useEffect } from "react";

export default function Home() {
  const {
    isAuthModalOpen,
    setUserInfo,
    listings,
    setListings,
    isMapView,
    userInfo,
    wishLists,
    setWishLists,
  } = userAppStore();
  useEffect(() => {
    const getUser = async () => {
      const data = await me();
      setUserInfo(data);
    };
    getUser();
  }, [setUserInfo]);

  useEffect(() => {
    const getData = async () => {
      const data = await getAllListings();
      setListings(data);
      const wishlists = await getUserWishlists(userInfo?.id);
      const wishListsId = wishlists?.map(({ listing }) => listing.id);
      setWishLists(wishListsId);
    };
    getData();
  }, [setListings, setWishLists, userInfo?.id]);

  return (
    <div className="max-h-[100vh] h-[100vh]">
      <Navbar />
      <div
        className="
      flex items-center justify-center"
      >
        <div className="w-[90vw] overflow-auto no-scrollbar mt-3 px-5">
          <ul className="flex gap-5 h-full">
            {listingTypes.map((data) => (
              <li
                key={data.name}
                className="w-max flex flex-col items-center justify-between h-16 cursor-pointer"
              >
                <span className="h-10 w-10  flex items-center justify-center">
                  {data.svgPath}
                </span>
                <div
                  className="text-xs font-semibold break-keep"
                  style={{ width: "inherit" }}
                >
                  {data.name}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {isMapView ? <MapView /> : <ListView />}
      <ViewSwitchBadge />
      <CompactFooter />
      {isAuthModalOpen && <AuthModal />}
    </div>
  );
}
