import { StateCreator } from "zustand";

export interface SearchSlice {
  searchLocation: any;
  setSearchLocation: any;
  selectionType: string | undefined;
  searchListings: any;
  setSearchListings: any;
  setSelectionType: (type: string | undefined) => void;
  searchPlaceSpace: any;
  setSearchPlaceSpace: any;
  dates: any;
  setDates: any;
}

export const createSearchSlice: StateCreator<SearchSlice> = (set, get) => ({
  searchLocation: undefined,
  setSearchLocation: (location: any) => set({ searchLocation: location }),
  selectionType: undefined,
  searchPlaceSpace: {
    adults: 0,
    childrens: 0,
    infants: 0,
  },
  dates: undefined,
  searchListings: [],
  setSearchListings: (searchListings: any) => set({ searchListings }),
  setSearchPlaceSpace: (searchPlaceSpace: any) => set({ searchPlaceSpace }),
  setSelectionType: (type) => set({ selectionType: type }),
  setDates: (dates: any) => set({ dates }),
});
