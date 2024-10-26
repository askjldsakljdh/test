"use client";

import Link from "next/link";
import { navigationLinks } from "../navigationLinks";
import classNames from "classnames";
import styles from "./styles.module.scss";
import { usePathname } from "next/navigation";

export const DesktopNav = () => {
  const pathName = usePathname();
  const isActive = (path: string) => pathName === path;

  return (
    <nav>
      {
        navigationLinks.map((section, idx) => (
          <ul key={idx} className={styles.navList}>
            {
              section.map((item, idx) => (
                <li key={item.href}>
                  <Link href={item.href} className={classNames(styles.navListItem, {[styles.active]: isActive(item.href)})}>
                    {item.icon}
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