"use client";
import AirBnbLogo from "airbnb/svg/airbnb-logo";
import Image from "next/image";
import React, { useState } from "react";
import { FiGlobe } from "react-icons/fi";
import { RxHamburgerMenu } from "react-icons/rx";
import ScheduleBar from "../common/ScheduleBar";
import ContextMenu from "../common/ContextMenu";
import { userAppStore } from "airbnb/store/store";
import { useRouter } from "next/navigation";
import Schedule from "../common/Schedule";

function Navbar() {
  const router = useRouter();
  const {
    setAuthModal,
    userInfo,
    setUserInfo,
    setMapView,
    setInitialView,
    showScheduleBar,
  } = userAppStore();
  const [isContextMenuVisible, setIsContextMenuVisible] = useState(false);

  const contextMenuOptions = [
    {
      name: "Login",
      callBack: () => {
        setAuthModal();
        setIsContextMenuVisible(false);
      },
    },
    {
      name: "Signup",
      callBack: () => {
        setAuthModal();
        setIsContextMenuVisible(false);
      },
    },
    {
      name: "Airbnb your home",
      callBack: () => {
        setIsContextMenuVisible(false);
      },
    },
    {
      name: "Help",
      callBack: () => {
        setIsContextMenuVisible(false);
      },
    },
  ];

  const authenticatedContextMenuOptions = [
    {
      name: "Messages",
      callBack: () => {
        setIsContextMenuVisible(false);
      },
    },
    {
      name: "Notifications",
      callBack: () => {
        setIsContextMenuVisible(false);
      },
    },
    {
      name: "Trips",
      callBack: () => {
        router.push("/trips");
        setIsContextMenuVisible(false);
      },
    },
    {
      name: "Wishlists",
      callBack: () => {
        router.push("/wishlist");
        setIsContextMenuVisible(false);
      },
    },
    {
      name: "Manage Listings",
      callBack: () => {
        router.push("/my-listings");
        setIsContextMenuVisible(false);
      },
    },
    {
      name: "Account",
      callBack: () => {
        setIsContextMenuVisible(false);
      },
    },
    {
      name: "Help",
      callBack: () => {
        setIsContextMenuVisible(false);
      },
    },
    {
      name: "Logout",
      callBack: () => {
        setIsContextMenuVisible(false);
        setUserInfo(null);
        localStorage.clear();
      },
    },
  ];

  const showContextMenu = (e) => {
    e.preventDefault();
    setIsContextMenuVisible(true);
  };

  return (
    <header
      className={`w-full flex flex-col justify-center transition-all duration-300
    ${!showScheduleBar ? "h-20 border-b border-b-gray-200" : "shadow-2xl h-40"}
    `}
    >
      <div className="flex  items-center justify-between px-20 ">
        <div className="flex-grow basis-0 ">
          <div
            className="w-max cursor-pointer"
            onClick={() => {
              router.push("/");
              setInitialView();
            }}
          >
            <AirBnbLogo />
          </div>
        </div>
        <div>{!showScheduleBar && <ScheduleBar />}</div>
        <div className="flex-grow basis-0 ">
          <ul className="flex items-center justify-end gap-6 font-medium">
            {userInfo && (
              <li
                className="cursor-pointer"
                onClick={() => router.push("new-listing")}
              >
                <span>Airbnb your home</span>
              </li>
            )}
            <li className="cursor-pointer">
              <FiGlobe />
            </li>
            <li
              className="flex cursor-pointer items-center gap-2 border border-gray-300 py-2 px-3 rounded-full hover:shadow-xl transition-all duration-500"
              onClick={(e) => showContextMenu(e)}
            >
              <RxHamburgerMenu className="text-lg" />
              <span>
                {userInfo ? (
                  <span className="flex justify-center items-center bg-black text-white h-7 w-7 text-sm rounded-full">
                    {userInfo?.firstName?.split("").shift()?.toUpperCase()}
                  </span>
                ) : (
                  <Image
                    src="/empty-profile.png"
                    alt="profile"
                    height={30}
                    width={30}
                  />
                )}
              </span>
            </li>
          </ul>
        </div>
        {isContextMenuVisible && (
          <ContextMenu
            options={
              !userInfo ? contextMenuOptions : authenticatedContextMenuOptions
            }
            cordinates={{
              x: window.innerWidth - 250,
              y: 70,
            }}
            contextMenu={isContextMenuVisible}
            setContextMenu={setIsContextMenuVisible}
          />
        )}
      </div>
      {showScheduleBar && (
        <div className="flex justify-center">
          <Schedule />
        </div>
      )}
    </header>
  );
}

export default Navbar;
