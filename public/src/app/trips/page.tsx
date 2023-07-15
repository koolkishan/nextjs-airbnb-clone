import dynamic from "next/dynamic";
import React from "react";
const Navbar = dynamic(() => import("airbnb/components/navbar/Navbar"), {
  ssr: false,
});

export default function page() {
  return <div>page</div>;
}
