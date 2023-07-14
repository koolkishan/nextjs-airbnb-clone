import { ListingUpdateManyWithoutTripsInput } from "./ListingUpdateManyWithoutTripsInput";
import { UserUpdateManyWithoutTripsInput } from "./UserUpdateManyWithoutTripsInput";

export type TripUpdateInput = {
  listing?: ListingUpdateManyWithoutTripsInput;
  user?: UserUpdateManyWithoutTripsInput;
};
