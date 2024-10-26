"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import styles from "./styles.module.scss";
import { ChatIcon, HomeIcon, SupportIcon } from "@/components/icons";
import Button from "@/components/ui/Button";
import { BurgerMenu } from "@/components/icons/BurgerMenu";
import { MobileNav } from "../Navigation/Mobile/MobileNav";
import { usePathname } from "next/navigation";

export const MobileMenu = () => {
  const [isNavigationOpen, setIsNavigationOpen] = useState(false);
  const pathName = usePathname();
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsNavigationOpen(false);
  }, [pathName]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsNavigationOpen(false); // Закрываем меню
      }
    };

    if (isNavigationOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    // Очищаем событие при размонтировании или закрытии меню
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isNavigationOpen]);

  return (
    <div ref={navRef}>
      <div className={styles.mobileMenu}>
        <Link href="/" className={styles.link}>
          <HomeIcon />
          <p>Главная</p>
        </Link>
        <Link href="/" className={styles.link}>
          <ChatIcon />
          <p>Чат</p>
        </Link>
        <Link href="/" className={styles.link}>
          <SupportIcon />
          <p>Поддержка</p>
        </Link>
        <Button className={styles.link} onClick={() => setIsNavigationOpen(prev => !prev)} style={{ padding: 0, border: "none", background: "none" }}>
          <BurgerMenu />
          <p>Меню</p>
        </Button>
      </div>
      {isNavigationOpen && <MobileNav />}
    </div>
  );
}