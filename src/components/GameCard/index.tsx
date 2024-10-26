import Image from "next/image";
import styles from "./styles.module.scss";

type Props = {
  icon: string;
  onlineCount: number;
  gameName?: string;
}

export const GameCard = ({ icon, onlineCount, gameName = "game" }: Props) => {
  return (
    <div className={styles.gameCard}>
      <Image src={icon} alt={gameName} width={195} height={262} />
      <div className={styles.gameInfo}>
        <span className={styles.onlineBadge}></span>
        <p>{onlineCount} играющих</p>
      </div>
    </div>
  );
}