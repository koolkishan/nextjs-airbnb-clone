import { JsonValue } from "type-fest";

export type Listing = {
  createdAt: Date;
  description: string;
  id: string;
  locationData: JsonValue;
  locationType: string;
  mapData: JsonValue;
  photos: JsonValue;
  placeAmeneites: JsonValue;
  placeSpace: JsonValue;
  placetype: string;
  price: number;
  title: string;
  updatedAt: Date;
};
