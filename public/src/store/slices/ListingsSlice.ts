import { StateCreator } from "zustand";

export interface LisitingsSlice {
  isMapView: boolean;
  setMapView: () => void;
}

export const createLisitingsSlice: StateCreator<LisitingsSlice> = (
  set,
  get
) => ({
  isMapView: false,
  setMapView: () => {
    set({ isMapView: !get().isMapView });
  },
});
