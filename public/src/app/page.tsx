import CompactFooter from "airbnb/components/footer/CompactFooter";
import Navbar from "airbnb/components/navbar/Navbar";
import ViewSwitchBadge from "airbnb/components/views/ViewSwitchBadge";
import React from "react";

export default function Home() {
  return (
    <div>
      <Navbar />
      <ViewSwitchBadge />
      <CompactFooter />
    </div>
  );
}
