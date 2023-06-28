"use client";
import AirBnbLogo from "airbnb/svg/airbnb-logo";
import Image from "next/image";
import React, { useState } from "react";
import { FiGlobe } from "react-icons/fi";
import { RxHamburgerMenu } from "react-icons/rx";
import ScheduleBar from "../common/ScheduleBar";
import ContextMenu from "../common/ContextMenu";
import { userAppStore } from "airbnb/store/store";

function Navbar() {
  const { setAuthModal } = userAppStore();

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

  const showContextMenu = (e) => {
    e.preventDefault();
    setIsContextMenuVisible(true);
  };

  return (
    <header className="h-20 border-b border-b-gray-200 w-full ">
      <div className="h-full flex  items-center justify-between px-20 ">
        <div className="flex-grow basis-0 ">
          <AirBnbLogo />
        </div>
        <div>
          <ScheduleBar />
        </div>
        <div className="flex-grow basis-0 ">
          <ul className="flex items-center justify-end gap-6 font-medium">
            <li className="cursor-pointer">
              <span>Airbnb your home</span>
            </li>
            <li className="cursor-pointer">
              <FiGlobe />
            </li>
            <li
              className="flex cursor-pointer items-center gap-2 border border-gray-300 py-2 px-3 rounded-full hover:shadow-xl transition-all duration-500"
              onClick={(e) => showContextMenu(e)}
            >
              <RxHamburgerMenu className="text-lg" />
              <span>
                <Image
                  src="/empty-profile.png"
                  alt="profile"
                  height={30}
                  width={30}
                />
              </span>
            </li>
          </ul>
        </div>
        {isContextMenuVisible && (
          <ContextMenu
            options={contextMenuOptions}
            cordinates={{
              x: window.innerWidth - 250,
              y: 70,
            }}
            contextMenu={isContextMenuVisible}
            setContextMenu={setIsContextMenuVisible}
          />
        )}
      </div>
    </header>
  );
}

export default Navbar;
