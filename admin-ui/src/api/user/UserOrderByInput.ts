import { SortOrder } from "../../util/SortOrder";

export type UserOrderByInput = {
  createdAt?: SortOrder;
  firstName?: SortOrder;
  id?: SortOrder;
  lastName?: SortOrder;
  listingsId?: SortOrder;
  password?: SortOrder;
  roles?: SortOrder;
  tripsId?: SortOrder;
  updatedAt?: SortOrder;
  username?: SortOrder;
  wishlistsId?: SortOrder;
};
