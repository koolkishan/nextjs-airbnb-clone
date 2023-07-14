import { ListingWhereUniqueInput } from "../listing/ListingWhereUniqueInput";
import { InputJsonValue } from "../../types";
import { TripWhereUniqueInput } from "../trip/TripWhereUniqueInput";
import { WishlistWhereUniqueInput } from "../wishlist/WishlistWhereUniqueInput";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  listings?: ListingWhereUniqueInput | null;
  password?: string;
  roles?: InputJsonValue;
  trips?: TripWhereUniqueInput | null;
  username?: string;
  wishlists?: WishlistWhereUniqueInput | null;
};
