import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface SidebarState {
  open: boolean;
  toggle: () => void;
}

export const useSidebar = create<SidebarState>()(
  devtools((set, get) => ({
    open: false,
    toggle: () => set({ open: !get().open }),
  }))
);
