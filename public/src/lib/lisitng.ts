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
