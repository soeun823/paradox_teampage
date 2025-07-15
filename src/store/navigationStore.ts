import { create } from "zustand";

interface LocationState {
  isLocate: number;
  setIsLocate: (value: number) => void;
}

export const useLocationStore = create<LocationState>((set) => ({
  isLocate: 0,
  setIsLocate: (value: number) => set({ isLocate: value }),
}));
