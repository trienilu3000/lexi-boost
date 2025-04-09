import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface MenuItemState {
  activeMenu: string[] | null;
  expanded: string[];
  setActiveMenu: (menu: string[]) => void;
  setExpanded: (item: string[]) => void;
}

export const useSidebarStore = create<MenuItemState>()(
  persist(
    (set, get) => ({
      activeMenu: null,
      expanded: [],
      setActiveMenu: (menu: string[]) => set({ activeMenu: menu }),
      setExpanded: (items: string[]) => {
        const newExpanded = [...get().expanded];
        items.forEach((item) => {
          const index = newExpanded.indexOf(item);
          if (index > -1) {
            newExpanded.splice(index, 1);
          } else {
            newExpanded.push(item);
          }
        });

        set({ expanded: newExpanded });
      },
    }),
    {
      name: "sidebar-storage",
    }
  )
);
