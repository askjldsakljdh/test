import { GameCard } from "@/components/GameCard";
import { CrownIcon } from "@/components/icons";
import { PageHeader } from "@/components/layout/PageHeader";
import { FlexList } from "@/components/ui/FlexList";

export default function PopularPage() {
  return (
    <div>
      <PageHeader icon={<CrownIcon />} title="Популярное" />
      <FlexList wrap style={{ marginTop: 30 }}>
        <GameCard icon="/images/game_2.png" onlineCount={113} />
        <GameCard icon="/images/game_2.png" onlineCount={113} />
        <GameCard icon="/images/game_2.png" onlineCount={113} />
      </FlexList>
    </div>
  );
}