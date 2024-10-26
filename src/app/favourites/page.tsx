import { FavouritesIcon } from "@/components/icons";
import { PageHeader } from "@/components/layout/PageHeader";
import { Input } from "@/components/ui/Input";
import styles from "./styles.module.scss";
// import Button from "@/components/ui/Button";
import { GameCard } from "@/components/GameCard";

export default function FavouritesPage() {
  return (
    <div className="pageWrapper">
      <PageHeader icon={<FavouritesIcon />} title="Избранное" />
      <div className="pageContent">
        <Input placeholder="Найдите свою игру" />
        <div className={styles.favouritesList}>
          <GameCard icon="/images/game_2.png" onlineCount={113} />
          <GameCard icon="/images/game_2.png" onlineCount={113} />
          <GameCard icon="/images/game_2.png" onlineCount={113} />
        </div>
        {/* <div className="centeredBlock">
          <h2>У вас нет избранных игр</h2>
          <Button>Перейти к играм</Button>
        </div> */}
      </div>
    </div>
  );
}