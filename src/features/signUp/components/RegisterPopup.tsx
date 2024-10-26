"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import { Popup } from "@/components/ui/Popup";
import styles from "./styles.module.scss";
import { LightningChargeIcon, MailIcon, ShareIcon } from "@/components/icons";
import { SocialsRegister } from "./SocialsRegister";
import { Input } from "@/components/ui/Input";
import { RegisterForm } from "./RegisterForm";
import { useAuthPopupsStore } from "@/stores/authPopups";
import { useSignUpFormStore } from "../store/signUpFormStore";

type Props = {
  closePopup: () => void;
  isOpen: boolean;
}

export const RegisterPopup = ({ closePopup, isOpen }: Props) => {
  const { setIsSignInPopupOpen } = useAuthPopupsStore(state => state);
  const swapToSignInPopup = () => {
    closePopup();
    setIsSignInPopupOpen(true);
  }

  const [currentTab, setCurrentTab] = useState<0|1|2>(0);

  const {
    email,
    password,
    promocode,
    setPromocode
  } = useSignUpFormStore(state => state);

  return (
    <Popup title={"Регистрация"} isOpen={isOpen} onClose={closePopup}>
      <div className={styles.tabs}>
        <Button onClick={() => setCurrentTab(0)} className={styles.tabButton} aria-pressed={currentTab === 0}>
          <ShareIcon />
          Cоц. сети
        </Button>
        <Button onClick={() => setCurrentTab(1)} className={styles.tabButton} aria-pressed={currentTab === 1}>
          <MailIcon />
          E-mail
        </Button>
        <Button onClick={() => setCurrentTab(2)} className={styles.tabButton} aria-pressed={currentTab === 2}>
          <LightningChargeIcon />
          В 1 клик
        </Button>
      </div>
      {
        currentTab === 0
          ? <SocialsRegister />
          : currentTab === 1
              ? <RegisterForm />
              : null
      }
      <div className={styles.form}>
        <div>
          <label>Промокод</label>
          <Input value={promocode} onChange={e => setPromocode(e.target.value)} />
        </div>
        <Button limegreen="true" onClick={() => console.log(email, password, promocode)}>Зарегистрироваться</Button>
      </div>
      <div style={{ marginTop: "30px" }}>
        <span className={styles.centerText}>Уже есть аккаунт? <span className={styles.loginLink} onClick={swapToSignInPopup}>Войти</span></span>
      </div>
    </Popup>
  );
}