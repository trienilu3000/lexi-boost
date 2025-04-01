import { create } from "zustand";
import { persist } from "zustand/middleware";
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

  accessToken: string | null;

  isAuthenticated: boolean;
  setAuthenticated: (isAuthenticated: boolean) => void;

  isLoggingOut: boolean;
  setLoggingOut: (isLoggingOut: boolean) => void;

  hasStateChanged: boolean;
  setStateChanged: (hasStateChanged: boolean) => void;

  refreshToken: string | null;
  refreshAccessToken: () => Promise<void>;

  setUserInfo: (userInfo: AuthInfo | null, token: string) => void;
  resetAuth: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      userInfo: null,
      accessToken: null,
      refreshToken: null,
      isAuthenticated: false,
      isLoggingOut: false,
      hasStateChanged: false,

      setAuthenticated: (isAuthenticated) => set({ isAuthenticated }),
      setLoggingOut: (isLoggingOut) => set({ isLoggingOut }),
      setStateChanged: (hasStateChanged) => set({ hasStateChanged }),

      refreshAccessToken: async () => {
        const response = await fetch("/api/auth/refresh", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ refreshToken: get().refreshToken }),
        });

        if (response.ok) {
          const data = await response.json();
          set({ accessToken: data.accessToken });
        }
      },

      setUserInfo: (userInfo, accessToken) => {
        set({ userInfo, accessToken, isAuthenticated: true });
      },

      resetAuth: () => {
        set({
          userInfo: null,
          accessToken: null,
          refreshToken: null,
          isAuthenticated: false,
        });
        sessionStorage.removeItem("auth-store");

        set({ isLoggingOut: true });
      },
    }),
    {
      name: "auth-store",
      storage: {
        getItem: (name) => {
          const value = sessionStorage.getItem(name);
          return value ? JSON.parse(value) : null;
        },
        setItem: (name, value) => {
          sessionStorage.setItem(name, JSON.stringify(value));
        },
        removeItem: (name) => {
          sessionStorage.removeItem(name);
        },
      },
    }
  )
);
