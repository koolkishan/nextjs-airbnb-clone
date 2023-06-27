import create from "zustand";
import { LisitingsSlice, createLisitingsSlice } from "./slices/ListingsSlice";
import { AuthSlice, createAuthSlice } from "./slices/AuthSlice";

type StoreState = LisitingsSlice & AuthSlice;

export const userAppStore = create<StoreState>()((...a) => ({
  ...createLisitingsSlice(...a),
  ...createAuthSlice(...a),
}));
