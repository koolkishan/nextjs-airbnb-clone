import { Listing } from "../listing/Listing";
import { User } from "../user/User";

export type Trip = {
  createdAt: Date;
  id: string;
  listing?: Array<Listing>;
  updatedAt: Date;
  user?: Array<User>;
};
