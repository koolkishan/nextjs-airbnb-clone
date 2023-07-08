import { StateCreator } from "zustand";

export interface LisitingsSlice {
  listings: any;
  isMapView: boolean;
  showScheduleBar: boolean;
  setMapView: () => void;
  setInitialView: () => void;
  setListings: (listings: any) => void;
  setShowScheduleBar: () => void;
}

export const createLisitingsSlice: StateCreator<LisitingsSlice> = (
  set,
  get
) => ({
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
