import { create } from "zustand";
import { User } from "../types/interfaces/Auth";

export interface AuthInfo {
  role?: {
    id: number;
    name: string;
  };
  permissions?: {
    id: string;
    name: string;
  }[];
  user: User;
}

export interface AuthState {
  userInfo: AuthInfo | null;
  setUserInfo: (userInfo: AuthInfo | null) => void;

  isAuthenticated: boolean;
  setAuthenticated: (isAuthenticated: boolean) => void;

  isLoggingOut: boolean;
  setLoggingOut: (isLoggingOut: boolean) => void;

  hasStateChanged: boolean;
  setStateChanged: (hasStateChanged: boolean) => void;

  resetAuth: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  userInfo: null,
  setUserInfo: (userInfo) => set({ userInfo }),

  isAuthenticated: false,
  setAuthenticated: (isAuthenticated) => set({ isAuthenticated }),

  isLoggingOut: false,
  setLoggingOut: (isLoggingOut) => set({ isLoggingOut }),

  hasStateChanged: false,
  setStateChanged: (hasStateChanged) => set({ hasStateChanged }),

  resetAuth: () => set({ userInfo: null, isAuthenticated: false }),
}));
