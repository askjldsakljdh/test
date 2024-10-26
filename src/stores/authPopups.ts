import { create } from "zustand"

export interface AuthPopupsState {
  isRegisterPopupOpen: boolean
  isSignInPopupOpen: boolean
}

export type AuthPopupsActions = {
  setIsRegisterPopupOpen: (isOpen: boolean) => void
  setIsSignInPopupOpen: (isOpen: boolean) => void
}

export type AuthPopupsStore = AuthPopupsState & AuthPopupsActions;

export const defaultInitState: AuthPopupsState = {
  isRegisterPopupOpen: false,
  isSignInPopupOpen: false
}

export const useAuthPopupsStore = create<AuthPopupsStore>((set) => ({
  ...defaultInitState,
  setIsRegisterPopupOpen: (isOpen: boolean) => set({ isRegisterPopupOpen: isOpen }),
  setIsSignInPopupOpen: (isOpen: boolean) => set({ isSignInPopupOpen: isOpen }),
}));