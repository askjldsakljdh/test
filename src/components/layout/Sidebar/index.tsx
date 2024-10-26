"use client";

import styles from "./styles.module.scss";
import Link from "next/link";
import { DesktopNav } from "../Navigation/Desktop/DesktopNav";
import { LogoIcon } from "@/components/icons";

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Link href="/" className={styles.logoLink}>
        <LogoIcon />
      </Link>
      <DesktopNav />
    </div>
  );
}

export default Sidebar;