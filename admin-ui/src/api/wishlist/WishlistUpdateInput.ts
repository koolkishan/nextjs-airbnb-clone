import { ListingUpdateManyWithoutWishlistsInput } from "./ListingUpdateManyWithoutWishlistsInput";
import { UserUpdateManyWithoutWishlistsInput } from "./UserUpdateManyWithoutWishlistsInput";

export type WishlistUpdateInput = {
  listing?: ListingUpdateManyWithoutWishlistsInput;
  user?: UserUpdateManyWithoutWishlistsInput;
};
