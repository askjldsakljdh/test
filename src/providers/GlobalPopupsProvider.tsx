"use client";

import { RegisterPopup } from "@/features/signUp";
import { SignInPopup } from "@/features/signIn";
import { useAuthPopupsStore } from "@/stores/authPopups";

type Props = {
  children: React.ReactNode;
}

export const GlobalPopupsProvider = ({ children }: Props) => {
  const {
    isSignInPopupOpen,
    setIsSignInPopupOpen,

    isRegisterPopupOpen,
    setIsRegisterPopupOpen
  } = useAuthPopupsStore(state => state);

  return (
    <>
      {children}
      <SignInPopup isOpen={isSignInPopupOpen} closePopup={() => setIsSignInPopupOpen(false)} />
      <RegisterPopup isOpen={isRegisterPopupOpen} closePopup={() => setIsRegisterPopupOpen(false)} />
    </>
  );
}