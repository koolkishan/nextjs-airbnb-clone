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
    <div>
      <Navbar />
      {isMapView ? <MapView /> : <ListView />}
      <ViewSwitchBadge />
      <CompactFooter />
      {isAuthModalOpen && <AuthModal />}
    </div>
  );
}
