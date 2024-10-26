import { createStore } from "zustand/vanilla";

export type RootState = {
  isRegisterPopupOpen: boolean;
  isSignInPopupOpen: boolean;
}

export type RootActions = {
  setIsRegisterPopupOpen: (isOpen: boolean) => void;
  setIsSignInPopupOpen: (isOpen: boolean) => void;
}

export type RootStore = RootState & RootActions;

export const defaultInitState: RootState = {
  isRegisterPopupOpen: false,
  isSignInPopupOpen: false
}

export const createRootStore = (
  initState: RootState = defaultInitState,
) => {
  return createStore<RootStore>((set) => ({
    ...initState,
    setIsRegisterPopupOpen: (isOpen: boolean) => set({ isRegisterPopupOpen: isOpen }),
    setIsSignInPopupOpen: (isOpen: boolean) => set({ isSignInPopupOpen: isOpen }),
  }))
}