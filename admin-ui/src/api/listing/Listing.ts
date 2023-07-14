import { User } from "../user/User";
import { JsonValue } from "type-fest";
import { Trip } from "../trip/Trip";
import { Wishlist } from "../wishlist/Wishlist";

export type Listing = {
  createdAt: Date;
  createdBy?: User | null;
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
  trips?: Trip | null;
  updatedAt: Date;
  wishlists?: Wishlist | null;
};
