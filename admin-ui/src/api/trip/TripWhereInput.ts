import { StringFilter } from "../../util/StringFilter";
import { ListingListRelationFilter } from "../listing/ListingListRelationFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";

export type TripWhereInput = {
  id?: StringFilter;
  listing?: ListingListRelationFilter;
  user?: UserListRelationFilter;
};
