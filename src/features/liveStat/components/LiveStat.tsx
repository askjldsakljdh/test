import Image from "next/image";
import styles from "./styles.module.scss";

export const LiveStat = () => {
  return (
    <div className={styles.stats}>
      <div className={styles.stat}>
        <Image src="/images/player.png" alt="players_online" width={36} height={43} />
        <div className={styles.statsInfo}>
          <h3>Игроки онлайн</h3>
          <span>3 330 чел.</span>
        </div>
      </div>
      <div className={styles.stat}>
        <Image src="/images/payout_speed.png" alt="players_online" width={47} height={37} />
        <div className={styles.statsInfo}>
          <h3>Среднее время выплаты</h3>
          <span>2 мин.</span>
        </div>
      </div>
      <div className={styles.stat}>
        <Image src="/images/top_win.png" alt="players_online" width={30} height={43} />
        <div className={styles.statsInfo}>
          <h3>Топ выигрыш за сегодня</h3>
          <span>$30 000</span>
        </div>
      </div>
    </div>
  );
}