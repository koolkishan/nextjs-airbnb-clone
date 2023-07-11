import { create } from "zustand";
import { LisitingsSlice, createLisitingsSlice } from "./slices/ListingsSlice";
import { AuthSlice, createAuthSlice } from "./slices/AuthSlice";
import { ProcessSlice, createProcessSlice } from "./slices/ProcessSlice";
import { SearchSlice, createSearchSlice } from "./slices/SearchSlice";

type StoreState = LisitingsSlice & AuthSlice & ProcessSlice & SearchSlice;

export const userAppStore = create<StoreState>()((...a) => ({
  ...createLisitingsSlice(...a),
  ...createAuthSlice(...a),
  ...createProcessSlice(...a),
  ...createSearchSlice(...a),
}));
