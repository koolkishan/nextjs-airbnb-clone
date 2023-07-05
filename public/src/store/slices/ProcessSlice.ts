import { StateCreator } from "zustand";

export interface PlaceSpaceType {
  guests: number;
  beds: number;
  bathrooms: number;
}

export interface ProcessSlice {
  locationType: any;
  placeType: any;
  mapData: any;
  locationData: any;
  placeSpace: PlaceSpaceType;
  placeAmeneites: any;
  photos: any;
  title: string;
  description: string;
  price: number;
  setMapData: (data: any) => void;
  setPlaceType: (data: any) => void;
  setLocationType: (data: any) => void;
  setLocationData: (data: any) => void;
  setPlaceSpace: (placeSpace: PlaceSpaceType) => void;
  setPlaceAmenities: (data: any) => void;
  setPhotos: (data: any) => void;
  setTitle: (title: string) => void;
  setDescription: (description: string) => void;
  setPrice: (price: number) => void;
}

export const createProcessSlice: StateCreator<ProcessSlice> = (set, get) => ({
  locationType: undefined,
  setLocationType: (locationType: any) => set({ locationType }),
  placeType: undefined,
  setPlaceType: (placeType: any) => set({ placeType }),
  mapData: undefined,
  setMapData: (mapData: any) => set({ mapData }),
  locationData: undefined,
  setLocationData: (locationData: any) => set({ locationData }),
  placeSpace: { bathrooms: 1, beds: 1, guests: 4 },
  setPlaceSpace: (placeSpace: any) => set({ placeSpace }),
  placeAmeneites: [],
  setPlaceAmenities: (placeAmeneites: any) => set({ placeAmeneites }),
  photos: [],
  setPhotos: (photos: any) => set({ photos }),
  title: "",
  setTitle: (title: any) => set({ title }),
  description: "",
  setDescription: (description: any) => set({ description }),
  price: 0,
  setPrice: (price: any) => set({ price }),
});
