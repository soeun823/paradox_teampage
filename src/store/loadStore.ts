import { create } from "zustand";

interface LoadState {
  isLoad: boolean;
  setIsLoad: () => void;
}

export const useLoadStore = create<LoadState>((set, get) => ({
  isLoad: false,
  setIsLoad: () => set({ isLoad: !get().isLoad }),
}));
