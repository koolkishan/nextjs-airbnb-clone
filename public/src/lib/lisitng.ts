import { get } from "http";
import { createUrl, post } from "./http";
import qs from "qs";
import axios from "axios";

export const createLisitngAPI = async (listingData: any) => {
  console.log({ listingData });
  const result = (
    await post(createUrl("/api/listings"), {
      ...listingData,
    }).catch(() => null)
  )?.data;

  console.log({ result });

  if (!result) {
    return alert("Could not create task");
  }

  return result;
};

export const getAllListings = async () => {
  const query = qs.stringify({
    orderBy: { createdAt: "asc" },
  });
  console.log({ query });

  const result = await axios.get(createUrl(`/api/listings?${query}`));

  console.log(result.data);
  if (!result) {
    alert("Could not get listings");
    return [];
  }

  console.log({ result });

  return result.data;
};

export const getListing = async (listingId: string) => {
  const result = await axios.get(createUrl(`/api/listings/${listingId}`));
  if (!result) {
  }
  return result.data;
};

export const getSearchListing = async (searchTerm: string) => {
  const query = qs.stringify({
    where: {
      OR: [
        {
          locationData: {
            path: ["place"],
            string_contains: searchTerm,
          },
        },
        {
          locationData: {
            path: ["region"],
            string_contains: searchTerm,
          },
        },
        {
          locationData: {
            path: ["country"],
            string_contains: searchTerm,
          },
        },
        {
          locationData: {
            path: ["district"],
            string_contains: searchTerm,
          },
        },
        {
          locationData: {
            path: ["landmark"],
            string_contains: searchTerm,
          },
        },
        {
          locationData: {
            path: ["locality"],
            string_contains: searchTerm,
          },
        },
        {
          locationData: {
            path: ["postcode"],
            string_contains: searchTerm,
          },
        },
        {
          locationData: {
            path: ["neighborhood"],
            string_contains: searchTerm,
          },
        },
      ],
    },
    orderBy: { createdAt: "asc" },
  });
  const result = await axios.get(createUrl(`/api/listings?${query}`));
  if (!result) {
    console.log("not found");
  }

  console.log({ result });
  return result.data;
};
