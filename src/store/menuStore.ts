import { create } from "zustand";

export interface MenuItemState {
  activeMenu: string[] | null;
  expanded: string[] | null;
  setActiveMenu: (menu: string[]) => void;
  setExpanded: (item: string) => void;
}

export const useSidebarStore = create<MenuItemState>((set) => ({
  activeMenu: null,
  expanded: null,
  setActiveMenu: (menu: string[]) => set({ activeMenu: menu }),
  setExpanded: (item: string) =>
    set((state) => {
      console.log("state ==> ", state);
      return {
        expanded: state.expanded?.includes(item)
          ? state.expanded.filter((i) => i !== item)
          : [...(state.expanded || []), item],
      };
    }),
}));
