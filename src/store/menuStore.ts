import { create } from "zustand";

export interface MenuItemState {
  activeMenu: string[] | null;
  expanded: string[];
  setActiveMenu: (menu: string[]) => void;
  setExpanded: (item: string[]) => void;
}

export const useSidebarStore = create<MenuItemState>((set) => ({
  activeMenu: null,
  expanded: [],
  setActiveMenu: (menu: string[]) => set({ activeMenu: menu }),
  setExpanded: (items: string[]) => {
    set((state) => {
      const newExpanded = state.expanded.slice();
      items.forEach((item) => {
        if (newExpanded.includes(item)) {
          const index = newExpanded.indexOf(item);
          newExpanded.splice(index, 1);
        } else {
          newExpanded.push(item);
        }
      });

      return { expanded: newExpanded };
    });
  },
}));
