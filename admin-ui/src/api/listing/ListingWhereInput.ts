import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { IntFilter } from "../../util/IntFilter";
import { TripWhereUniqueInput } from "../trip/TripWhereUniqueInput";
import { WishlistWhereUniqueInput } from "../wishlist/WishlistWhereUniqueInput";

export type ListingWhereInput = {
  createdBy?: UserWhereUniqueInput;
  description?: StringFilter;
  id?: StringFilter;
  locationData?: JsonFilter;
  locationType?: StringFilter;
  mapData?: JsonFilter;
  photos?: JsonFilter;
  placeAmeneites?: JsonFilter;
  placeSpace?: JsonFilter;
  placetype?: StringFilter;
  price?: IntFilter;
  title?: StringFilter;
  trips?: TripWhereUniqueInput;
  wishlists?: WishlistWhereUniqueInput;
};
