import { create } from "zustand";
import { LisitingsSlice, createLisitingsSlice } from "./slices/ListingsSlice";
import { AuthSlice, createAuthSlice } from "./slices/AuthSlice";
import { ProcessSlice, createProcessSlice } from "./slices/ProcessSlice";

type StoreState = LisitingsSlice & AuthSlice & ProcessSlice;

export const userAppStore = create<StoreState>()((...a) => ({
  ...createLisitingsSlice(...a),
  ...createAuthSlice(...a),
  ...createProcessSlice(...a),
}));
