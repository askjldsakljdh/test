"use client"

import Link from "next/link";
import styles from "./styles.module.scss";
import classNames from "classnames";
import { usePathname } from "next/navigation";
import { navigationLinks } from "../navigationLinks";

export const MobileNav = () => {
  const pathName = usePathname();
  const isActive = (path: string) => pathName === path;

  return (
    <nav className={styles.mobileNav}>
      {
        navigationLinks.map((section, idx) => (
          <ul key={idx} className={styles.navList}>
            {
              section.map((item, idx) => (
                <li key={item.href}>
                  <Link href={item.href} className={classNames(styles.navListItem, {[styles.active]: isActive(item.href)})}>
                    {item.icon}
                    <h4>{item.label}</h4>
                  </Link>
                </li>
              ))
            }
          </ul>
        ))
      }
    </nav>
  );
}