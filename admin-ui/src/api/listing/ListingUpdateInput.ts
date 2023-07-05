import { InputJsonValue } from "../../types";

export type ListingUpdateInput = {
  description?: string;
  locationData?: InputJsonValue;
  locationType?: string;
  mapData?: InputJsonValue;
  photos?: InputJsonValue;
  placeAmeneites?: InputJsonValue;
  placeSpace?: InputJsonValue;
  placetype?: string;
  price?: number;
  title?: string;
};
