"use client";
import { me } from "airbnb/lib/auth";
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
    setUserInfo,
    userInfo,
  } = userAppStore();
  useEffect(() => {
    setInitialView();
    setCurrentListing(undefined);
    if (!userInfo) {
      const getData = async () => {
        const data = await me();
        setUserInfo(data);
      };
      getData();
    }
    // if (  showScheduleBar) setShowScheduleBar();
  }, [
    pathName,
    setInitialView,
    showScheduleBar,
    setShowScheduleBar,
    setCurrentListing,
    setUserInfo,
    userInfo,
  ]);
  return null;
}
