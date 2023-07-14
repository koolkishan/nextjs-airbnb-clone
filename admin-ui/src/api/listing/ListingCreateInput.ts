import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { InputJsonValue } from "../../types";
import { TripWhereUniqueInput } from "../trip/TripWhereUniqueInput";
import { WishlistWhereUniqueInput } from "../wishlist/WishlistWhereUniqueInput";

export type ListingCreateInput = {
  createdBy?: UserWhereUniqueInput | null;
  description: string;
  locationData: InputJsonValue;
  locationType: string;
  mapData: InputJsonValue;
  photos: InputJsonValue;
  placeAmeneites: InputJsonValue;
  placeSpace: InputJsonValue;
  placetype: string;
  price: number;
  title: string;
  trips?: TripWhereUniqueInput | null;
  wishlists?: WishlistWhereUniqueInput | null;
};
