"use client";

import Link from 'next/link';
import { Popup } from '@/components/ui/Popup';
import styles from './styles.module.scss';
import { FacebookIcon, GoogleIcon, TelegramIcon } from '@/components/icons';
import { useAuthPopupsStore } from '@/stores/authPopups';
import { SignInForm } from './SignInForm';

type Props = {
  closePopup: () => void;
  isOpen: boolean;
}

export const SignInPopup = ({ closePopup, isOpen }: Props) => {  
  const { setIsRegisterPopupOpen } = useAuthPopupsStore(state => state);
  const swapToRegisterPopup = () => {
    closePopup();
    setIsRegisterPopupOpen(true);
  }

  return (
    <Popup title={"Войти"} isOpen={isOpen} onClose={closePopup}>
      <SignInForm />
      <div className={styles.otherWaysToLogin}>
        <h3 className={styles.centerText}>Или</h3>
        <div className={styles.socialsLogin}>
          <GoogleIcon />
          <FacebookIcon />
          <TelegramIcon />
        </div>
      </div>
      <div style={{ marginTop: "30px" }}>
        <Link href="/forgot-password" className={styles.centerText}>Забыли пароль?</Link>
        <span className={styles.centerText}>Ещё нет аккаунта? <span className={styles.registerLink} onClick={swapToRegisterPopup}>Зарегистрироваться</span></span>
      </div>
    </Popup>
  );
}