import { HistoryIcon } from "@/components/icons";
import { PageHeader } from "@/components/layout/PageHeader";
import Button from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

export default function HistoryPage() {
  return (
    <div className="pageWrapper">
      <PageHeader icon={<HistoryIcon />} title="Недавние" />
      <div className="pageContent">
        <Input placeholder="Найдите свою игру" />
        {/* <div className={styles.favouritesList}>
          <GameCard icon="/images/game_2.png" onlineCount={113} />
          <GameCard icon="/images/game_2.png" onlineCount={113} />
          <GameCard icon="/images/game_2.png" onlineCount={113} />
        </div> */}
        <div className="centeredBlock">
          <h2>История недавних игр пуста</h2>
          <Button>Перейти к играм</Button>
        </div>
      </div>
    </div>
  );
}