import { createLisitngAPI } from "airbnb/lib/lisitng";
import { userAppStore } from "airbnb/store/store";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import Confetti from "react-confetti";

export default function ListingCreated() {
  const router = useRouter();
  const {
    locationType,
    placetype,
    mapData,
    locationData,
    placeSpace,
    placeAmeneites,
    photos,
    title,
    description,
    price,
    userInfo,
  } = userAppStore();
  useEffect(() => {
    createLisitngAPI({
      locationType,
      placetype,
      mapData,
      locationData,
      placeSpace,
      placeAmeneites,
      photos,
      title,
      description,
      price,
      listingCreatedBy: { id: userInfo?.id },
    });
  }, [
    locationType,
    placetype,
    mapData,
    locationData,
    placeSpace,
    placeAmeneites,
    photos,
    title,
    description,
    price,
    userInfo,
  ]);

  return (
    <div className="flex flex-col gap-5 items-center justify-center h-full">
      <div className="flex flex-col gap-2 items-center justify-center">
        <h2 className="font-semibold text-4xl">Congratulations!</h2>
        <p>You have successfully created your listing!</p>
        <div className="flex gap-5">
          <button
            className="bg-[#222222] py-3 mt-5  px-10 text-white text-base font-medium rounded-md cursor-pointer"
            onClick={() => router.push("/")}
          >
            Visit Home Page
          </button>
          <button
            className="bg-airbnb-gradient py-3 mt-5  px-5 text-white text-base font-medium rounded-md cursor-pointer"
            onClick={() => router.push("/my-listings")}
          >
            View your listings
          </button>
        </div>
        <Confetti width={window.innerWidth} height={window.innerHeight} />
      </div>
    </div>
  );
}
