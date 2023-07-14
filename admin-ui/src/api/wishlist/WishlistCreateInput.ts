import { ListingCreateNestedManyWithoutWishlistsInput } from "./ListingCreateNestedManyWithoutWishlistsInput";
import { UserCreateNestedManyWithoutWishlistsInput } from "./UserCreateNestedManyWithoutWishlistsInput";

export type WishlistCreateInput = {
  listing?: ListingCreateNestedManyWithoutWishlistsInput;
  user?: UserCreateNestedManyWithoutWishlistsInput;
};
