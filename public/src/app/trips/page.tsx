"use client";
import AuthModal from "airbnb/components/auth/AuthModal";
import CompactFooter from "airbnb/components/footer/CompactFooter";
import { getUserTrips } from "airbnb/lib/lisitng";
import { userAppStore } from "airbnb/store/store";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
const Navbar = dynamic(() => import("airbnb/components/navbar/Navbar"), {
  ssr: false,
});

export default function Page() {
  const router = useRouter();
  const { userInfo } = userAppStore();
  const [tripData, setTripData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const data = await getUserTrips(userInfo?.id);
      setTripData(data);
      console.log({ data });
    };
    if (userInfo) {
      getData();
    }
  }, []);

  function checkDateStatus(inputDate) {
    const currentDate = new Date();
    const providedDate = new Date(inputDate);

    if (providedDate < currentDate) {
      return "Completed";
    } else if (providedDate > currentDate) {
      return "Upcoming";
    }
  }

  return (
    <div>
      <Navbar />
      <div className="h-[82.5vh] flex justify-start items-start">
        <div className="relative overflow-x-auto shadow-lg sm:rounded-lg w-full m-20">
          <table className="w-full text-sm text-left text-gray-500 ">
            <thead className="text-xs text-gray-700 uppercase bg-gray-200 ">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Listing Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Check In Date
                </th>
                <th scope="col" className="px-6 py-3">
                  Check out Date
                </th>
                <th scope="col" className="px-6 py-3">
                  Price
                </th>
                <th scope="col" className="px-6 py-3">
                  Trip Status
                </th>
              </tr>
            </thead>
            <tbody>
              {tripData.map((trip, index) => (
                <tr
                  className="bg-white border-b  hover:bg-gray-100 "
                  key={index}
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap cursor-pointer"
                    onClick={() => router.push(`/listing/${trip.listing.id}`)}
                  >
                    {trip.listing.title}
                  </th>
                  <td className="px-6 py-4">{trip.tripData.startDate}</td>
                  <td className="px-6 py-4">{trip.tripData.endDate}</td>
                  <td className="px-6 py-4">{trip.tripData.price}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`${
                        checkDateStatus(trip.tripData.startDate) === "Completed"
                          ? "bg-green-500"
                          : "bg-airbnb-theme-color"
                      }  text-white text-xs font-medium mr-2 px-2.5 py-0.5 rounded`}
                    >
                      {checkDateStatus(trip.tripData.startDate)}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <CompactFooter />
    </div>
  );
}
