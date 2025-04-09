import { create } from "zustand";

export interface TabState {
  activeTab: string[] | null;
  setActiveTab: (tab: string[]) => void;
  setExpanded: (item: string[]) => void;
}

export const useTabStore = create<TabState>((set) => ({
  activeTab: null,
  setActiveTab: (tab: string[]) => set({ activeTab: tab }),
  setExpanded: (items: string[]) => {
    set((state) => {
      state.activeTab = items;
      return { activeTab: state.activeTab };
    });
  },
}));
