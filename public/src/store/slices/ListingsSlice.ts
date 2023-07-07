import { StateCreator } from "zustand";

export interface LisitingsSlice {
  listings: any;
  isMapView: boolean;
  setMapView: () => void;
  setListings: (listings: any) => void;
}

export const createLisitingsSlice: StateCreator<LisitingsSlice> = (
  set,
  get
) => ({
  isMapView: false,
  listings: [],
  setMapView: () => {
    set({ isMapView: !get().isMapView });
  },
  setListings: (listings) => {
    set({ listings });
  },
});
