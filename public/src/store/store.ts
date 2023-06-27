import create from "zustand";
import { LisitingsSlice, createLisitingsSlice } from "./slices/ListingsSlice";

type StoreState = LisitingsSlice;

export const userAppStore = create<StoreState>()((...a) => ({
  ...createLisitingsSlice(...a),
}));
