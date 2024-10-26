"use client";

import { LogoIcon } from "@/components/icons";
import styles from "./styles.module.scss";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { HalfArrowDownIcon } from "@/components/icons/HalfArrowDownIcon";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.logo}>
        <LogoIcon />
        <h2>REX CASINO</h2>
      </div>
      <div className={styles.footerNavSections}>
        <div className={styles.footerNavSection}>
          <h3>Казино</h3>
          <ul>
            <li>
              <Link href="/slots">Слоты</Link>
            </li>
            <li>
              <Link href="/live">Live-Казино</Link>
            </li>
            <li>
              <Link href="/games">Наши режимы</Link>
            </li>
          </ul>
        </div>
        <div className={styles.footerNavSection}>
          <h3>Информация</h3>
          <ul>
            <li>
              <Link href="/partners">Партнерам</Link>
            </li>
            <li>
              <Link href="/faq">Вопросы и ответы</Link>
            </li>
            <li>
              <Link href="/faq">Риски азартных игр</Link>
            </li>
          </ul>
        </div>
        <div className={styles.footerNavSection}>
          <h3>О нас</h3>
          <ul>
            <li>
              <Link href="/partners">Политика конфиденциальности</Link>
            </li>
            <li>
              <Link href="/faq">Пользовательское соглашение</Link>
            </li>
            <li>
              <Link href="/faq">Правила игр</Link>
            </li>
          </ul>
        </div>
      </div>
      <p className={styles.copyright}>© 2024 Rex casino | Все права защищены.</p>
      <Button className={styles.topBtn} onClick={() => window.scrollTo(0, 0)}>
        Наверх
        <HalfArrowDownIcon />
      </Button>
    </footer>
  );
}