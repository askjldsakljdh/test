import { create } from "zustand";

export interface SignUpFormState {
  email: string;
  password: string;
  promocode: string;
}

export interface SignUpFormActions {
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  setPromocode: (promocode: string) => void;
}

export type SignUpFormStore = SignUpFormState & SignUpFormActions;

export const defaultInitState: SignUpFormState = {
  email: "",
  password: "",
  promocode: "",
}

export const useSignUpFormStore = create<SignUpFormStore>((set) => ({
  ...defaultInitState,
  setEmail: (email: string) => set({ email }),
  setPassword: (password: string) => set({ password }),
  setPromocode: (promocode: string) => set({ promocode }),
}));