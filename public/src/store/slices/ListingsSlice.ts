import { StateCreator } from "zustand";

export interface LisitingsSlice {
  currentListing: any;
  listings: any;
  isMapView: boolean;
  showScheduleBar: boolean;
  setCurrentListing: any;
  setMapView: () => void;
  setInitialView: () => void;
  setListings: (listings: any) => void;
  setShowScheduleBar: () => void;
}

export const createLisitingsSlice: StateCreator<LisitingsSlice> = (
  set,
  get
) => ({
  currentListing: undefined,
  setCurrentListing: (listing: any) => set({ currentListing: listing }),
  isMapView: false,
  listings: [],
  showScheduleBar: false,
  setMapView: () => {
    set({ isMapView: !get().isMapView });
  },
  setInitialView: () => {
    set({ isMapView: false });
  },
  setListings: (listings) => {
    set({ listings });
  },
  setShowScheduleBar: () => {
    set({ showScheduleBar: !get().showScheduleBar });
  },
});
