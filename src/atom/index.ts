import { create } from 'zustand';

type RadioState = {
    radio: number;
    setRadio: (value: number) => void;
};

const useRadioStore = create<RadioState>((set) => ({
    radio: 1,
    setRadio: (value: number) => set({ radio: value }),
}));

export default useRadioStore;