import { create } from "zustand";

interface SelectedChar {
  name: string;
  real: string;
  comment: string;
}

interface SelectedCharStore {
  selectedChar: SelectedChar | null;
  setSelectedChar: (char: SelectedChar) => void;
  clearSelectedChar: () => void;
}

export const useSelectedCharStore = create<SelectedCharStore>((set) => ({
  selectedChar: null,
  setSelectedChar: (char) => set({ selectedChar: char }),
  clearSelectedChar: () => set({ selectedChar: null }),
}));
