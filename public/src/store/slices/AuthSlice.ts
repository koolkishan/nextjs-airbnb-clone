import { StateCreator } from "zustand";

export interface AuthSlice {
  isAuthModalOpen: boolean;
  setAuthModal: () => void;
}

export const createAuthSlice: StateCreator<AuthSlice> = (set, get) => ({
  isAuthModalOpen: false,
  setAuthModal: () => {
    set({ isAuthModalOpen: !get().isAuthModalOpen });
  },
});
