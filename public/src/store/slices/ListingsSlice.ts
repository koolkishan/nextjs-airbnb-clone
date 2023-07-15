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
  userListings: any;
  setUserListings: any;
  removeUserListing: any;
  wishLists: any;
  setWishLists: any;
  addToWishListSlice: any;
  removeFromWishList: any;
  wishListsPage: any;
  setWishListsPage: any;
}

export const createLisitingsSlice: StateCreator<LisitingsSlice> = (
  set,
  get
) => ({
  wishLists: [],
  setWishLists: (wishLists: any) => set({ wishLists }),
  wishListsPage: [],
  setWishListsPage: (wishListsPage: any) => set({ wishListsPage }),
  addToWishListSlice: (id: string) => {
    const lists = get().wishLists;
    lists.push(id);
    set({ wishLists: lists });
  },
  removeFromWishList: () => {},
  currentListing: undefined,
  setCurrentListing: (listing: any) => set({ currentListing: listing }),
  removeUserListing: (listing: any) => {
    const listings = get().userListings;
    const index = listings.findIndex((list) => list.id === listing);
    if (index !== -1) {
      listings.splice(index, 1);
    }
    set({ userListings: listings });
  },
  isMapView: false,
  listings: [],
  showScheduleBar: false,
  userListings: [],
  setUserListings: (userListings: any) => set({ userListings }),
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
