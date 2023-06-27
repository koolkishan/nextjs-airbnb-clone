"use client";
import AuthModal from "airbnb/components/auth/AuthModal";
import CompactFooter from "airbnb/components/footer/CompactFooter";
import Navbar from "airbnb/components/navbar/Navbar";
import ViewSwitchBadge from "airbnb/components/views/ViewSwitchBadge";
import { userAppStore } from "airbnb/store/store";
import React from "react";

export default function Home() {
  const { isAuthModalOpen } = userAppStore();
  return (
    <div>
      <Navbar />
      <ViewSwitchBadge />
      <CompactFooter />
      {isAuthModalOpen && <AuthModal />}
    </div>
  );
}
