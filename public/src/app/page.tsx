"use client";
import AuthModal from "airbnb/components/auth/AuthModal";
import CompactFooter from "airbnb/components/footer/CompactFooter";
import Navbar from "airbnb/components/navbar/Navbar";
import ViewSwitchBadge from "airbnb/components/views/ViewSwitchBadge";
import { me } from "airbnb/lib/auth";
import { userAppStore } from "airbnb/store/store";
import React, { useEffect } from "react";

export default function Home() {
  const { isAuthModalOpen, setUserInfo } = userAppStore();
  useEffect(() => {
    const getUser = async () => {
      const data = await me();
      setUserInfo(data);
    };
    getUser();
  }, [setUserInfo]);
  return (
    <div>
      <Navbar />
      <ViewSwitchBadge />
      <CompactFooter />
      {isAuthModalOpen && <AuthModal />}
    </div>
  );
}
