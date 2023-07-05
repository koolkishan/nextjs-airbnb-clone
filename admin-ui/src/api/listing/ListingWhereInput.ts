import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { IntFilter } from "../../util/IntFilter";

export type ListingWhereInput = {
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
};
