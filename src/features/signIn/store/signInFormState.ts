import { create } from "zustand";

export interface SignInFormState {
  email: string;
  password: string;
}

export interface SignInFormActions {
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
}

export type SignInFormStore = SignInFormState & SignInFormActions;

export const defaultInitState: SignInFormState = {
  email: "",
  password: "",
}

export const useSignInFormStore = create<SignInFormStore>((set) => ({
  ...defaultInitState,
  setEmail: (email: string) => set({ email }),
  setPassword: (password: string) => set({ password }),
}));