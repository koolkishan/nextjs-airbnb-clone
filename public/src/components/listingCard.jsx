"use client";
import Image from "next/image";
import React from "react";
import { usePathname, useRouter } from "next/navigation";
import {
  addToWishList,
  deleteListingAPI,
  removeFromWishListAPI,
} from "airbnb/lib/lisitng";
import { userAppStore } from "airbnb/store/store";
import { IoMdHeart } from "react-icons/io";

export default function ListingCard({
  data,
  isMyListing = false,
  isWishList = false,
  wishListId = undefined,
}) {
  const {
    removeUserListing,
    userInfo,
    wishLists,
    addToWishListSlice,
    wishListsPage,
    setWishListsPage,
  } = userAppStore();
  const pathname = usePathname();

  const router = useRouter();
  const deleteListing = async () => {
    await deleteListingAPI(data?.id);
    removeUserListing(data.id);
  };

  const addWishList = async () => {
    await addToWishList(data.id, userInfo?.id);
    addToWishListSlice(data.id);
  };

  const removeWishlist = async () => {
    // const id = wishLists.find((list) => console.log(list));
    // await removeFromWishListAPI(id.id);
  };

  const deleteWishList = async () => {
    await removeFromWishListAPI(wishListId);
    const index = wishListsPage.findIndex((list) => list.id === wishListId);
    if (index !== -1) {
      wishListsPage.splice(index, 1);
      setWishListsPage(wishListsPage);
    }
  };

  return (
    <div className="flex items-center justify-center flex-col gap-1">
      <div
        className="flex items-center justify-center cursor-pointer w-full "
        onClick={() => router.push(`/listing/${data.id}`)}
      >
        <div className="flex flex-col gap-2">
          <div className="relative w-64 h-56 ">
            <Image
              src={data?.photos[0]}
              fill
              alt="listing"
              className="rounded-lg object-cover"
            />
            {pathname === "/" && userInfo && (
              <div className="absolute z-20 right-2 top-2">
                <IoMdHeart
                  style={{ stroke: "white", strokeWidth: "40" }}
                  className={`text-3xl ${
                    wishLists?.includes(data.id)
                      ? "text-airbnb-theme-color"
                      : "text-[#00000099]"
                  }`}
                  onClick={(e) => {
                    e.stopPropagation();
                    if (wishLists?.includes(data.id)) {
                      removeWishlist();
                    } else addWishList();
                  }}
                />
              </div>
            )}
          </div>
          <div>
            <h3>{data.title}</h3>
            <span>${data.price} night</span>
          </div>
        </div>
      </div>
      {isMyListing && (
        <button
          className="bg-airbnb-gradient py-3 mt-5  px-5 text-white text-base font-medium rounded-md cursor-pointer w-80"
          onClick={deleteListing}
        >
          Delete
        </button>
      )}
      {isWishList && (
        <button
          className="bg-airbnb-gradient py-3 mt-5  px-5 text-white text-base font-medium rounded-md cursor-pointer w-80"
          onClick={deleteWishList}
        >
          Delete
        </button>
      )}
    </div>
  );
}
