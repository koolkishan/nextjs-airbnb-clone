import { SortOrder } from "../../util/SortOrder";

export type ListingOrderByInput = {
  createdAt?: SortOrder;
  createdBy?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  locationData?: SortOrder;
  locationType?: SortOrder;
  mapData?: SortOrder;
  photos?: SortOrder;
  placeAmeneites?: SortOrder;
  placeSpace?: SortOrder;
  placetype?: SortOrder;
  price?: SortOrder;
  title?: SortOrder;
  tripsId?: SortOrder;
  updatedAt?: SortOrder;
  wishlistsId?: SortOrder;
};
