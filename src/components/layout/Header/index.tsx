"use client";

import { LiveIcon, LogoIcon, MoneyIcon, SlotIcon } from "@/components/icons";
import Button from "@/components/ui/Button";
import styles from "./styles.module.scss";
import { useAuthPopupsStore } from "@/stores/authPopups";
import { Dropdown } from "@/components/ui/Dropdown/Dropdown";
import Image from "next/image";

export const Header = () => {
  const { setIsSignInPopupOpen, setIsRegisterPopupOpen } = useAuthPopupsStore(state => state);
  
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <LogoIcon />
      </div>
      <div className={styles.headerButtons + " " + styles.menuButtons}>
        <Button>
          <>
            <SlotIcon />
            Слоты
          </>
        </Button>
        <Button>
          <>
            <LiveIcon />
            Live-казино
          </>
        </Button>
        <Button>
          <>
            <MoneyIcon />
            Бонусы
          </>
        </Button>
      </div>
      <div className={styles.headerButtons}>
        <Dropdown className={styles.languageDropdown} items={[
          { label: "Русский", value: "ru", icon: <Image alt="flag" src="/icons/ru.png" width={20} height={20} /> },
          { label: "English", value: "en", icon: <Image alt="flag" src="/icons/usa.png" width={20} height={20} /> }
        ]} />
        <Button className={styles.loginButton} onClick={() => setIsSignInPopupOpen(true)}>Вход</Button>
        <Button className={styles.registrationButton} onClick={() => setIsRegisterPopupOpen(true)}>Регистрация</Button>
      </div>
    </header>
  );
}