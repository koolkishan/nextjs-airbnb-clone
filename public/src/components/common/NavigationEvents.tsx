"use client";
import { userAppStore } from "airbnb/store/store";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function NavigationEvents() {
  const pathName = usePathname();
  const { setInitialView } = userAppStore();
  useEffect(() => {
    setInitialView();
  }, [pathName, setInitialView]);
  return null;
}
