"use client";
import { userAppStore } from "airbnb/store/store";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function NavigationEvents() {
  const pathName = usePathname();
  const {
    setInitialView,
    setCurrentListing,
    setShowScheduleBar,
    showScheduleBar,
  } = userAppStore();
  useEffect(() => {
    setInitialView();
    setCurrentListing(undefined);
    // if (  showScheduleBar) setShowScheduleBar();
  }, [
    pathName,
    setInitialView,
    showScheduleBar,
    setShowScheduleBar,
    setCurrentListing,
  ]);
  return null;
}
