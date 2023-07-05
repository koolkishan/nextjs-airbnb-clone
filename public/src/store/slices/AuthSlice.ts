import { StateCreator } from "zustand";

interface userInfo {
  firstName: string;
  lastName: string;
  userName: string;
}
export interface AuthSlice {
  isAuthModalOpen: boolean;
  isLoggedIn: boolean;
  userInfo: userInfo | null;
  setAuthModal: () => void;
  setIsLoggedIn: (status: boolean) => void;
  setUserInfo: (userInfo: userInfo | null) => void;
}

export const createAuthSlice: StateCreator<AuthSlice> = (set, get) => ({
  isAuthModalOpen: false,
  isLoggedIn: false,
  userInfo: null,
  setAuthModal: () => {
    set({ isAuthModalOpen: !get().isAuthModalOpen });
  },
  setIsLoggedIn: (status) => {
    set({ isLoggedIn: status });
  },
  setUserInfo: (userInfo) => {
    set({ userInfo });
  },
});
