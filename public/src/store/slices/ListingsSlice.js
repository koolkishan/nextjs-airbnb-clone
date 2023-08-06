export const createLisitingsSlice = (set, get) => ({
  wishLists: [],
  setWishLists: (wishLists) => set({ wishLists }),
  wishListsPage: [],
  setWishListsPage: (wishListsPage) => set({ wishListsPage }),
  addToWishListSlice: (id) => {
    const lists = get().wishLists;
    lists.push(id);
    set({ wishLists: lists });
  },
  removeFromWishList: () => {},
  currentListing: undefined,
  setCurrentListing: (listing) => set({ currentListing: listing }),
  removeUserListing: (listing) => {
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
  setUserListings: (userListings) => set({ userListings }),
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
