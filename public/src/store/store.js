import { create } from "zustand";
import { createLisitingsSlice } from "./slices/ListingsSlice";
import { createAuthSlice } from "./slices/AuthSlice";
import { createProcessSlice } from "./slices/ProcessSlice";
import { createSearchSlice } from "./slices/SearchSlice";

export const userAppStore = create()((...a) => ({
  ...createLisitingsSlice(...a),
  ...createAuthSlice(...a),
  ...createProcessSlice(...a),
  ...createSearchSlice(...a),
}));
