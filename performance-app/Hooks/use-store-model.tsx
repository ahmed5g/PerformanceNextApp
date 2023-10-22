import { create } from "zustand";

interface useStoreModaelStore {
    isOpen: boolean;
    onOpen: () => void;
    onClose : () => void;
};

export const useStoreModel = create<useStoreModaelStore>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true}),
    onClose: () => set({ isOpen: false}),
}))