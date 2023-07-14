import { ListingCreateNestedManyWithoutTripsInput } from "./ListingCreateNestedManyWithoutTripsInput";
import { UserCreateNestedManyWithoutTripsInput } from "./UserCreateNestedManyWithoutTripsInput";

export type TripCreateInput = {
  listing?: ListingCreateNestedManyWithoutTripsInput;
  user?: UserCreateNestedManyWithoutTripsInput;
};
