import { FacebookIcon, GoogleIcon, TelegramIcon } from "@/components/icons";
import styles from "./styles.module.scss";

export const SocialsRegister = () => {
  return (
    <div className={styles.socialsLogin}>
      <GoogleIcon />
      <FacebookIcon />
      <TelegramIcon />
    </div>
  );
}