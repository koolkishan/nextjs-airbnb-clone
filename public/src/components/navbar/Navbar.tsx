import AirBnbLogo from "airbnb/svg/airbnb-logo";
import Image from "next/image";
import React from "react";
import { FiGlobe } from "react-icons/fi";
import { RxHamburgerMenu } from "react-icons/rx";
import ScheduleBar from "../common/ScheduleBar";

function Navbar() {
  return (
    <header className="h-20 border-b border-b-gray-200  flex justify-between items-center px-20">
      <AirBnbLogo />
      <ScheduleBar />
      <ul className="flex items-center gap-6 font-medium">
        <li className="cursor-pointer">
          <span>Airbnb your home</span>
        </li>
        <li className="cursor-pointer">
          <FiGlobe />
        </li>
        <li className="flex cursor-pointer items-center gap-2 border border-gray-300 py-2 px-3 rounded-full hover:shadow-xl transition-all duration-500">
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
    </header>
  );
}

export default Navbar;
