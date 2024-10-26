import { GameCard } from "@/components/GameCard";
import { SlotIcon } from "@/components/icons";
import { PageHeader } from "@/components/layout/PageHeader";
import { FlexList } from "@/components/ui/FlexList";

export default function SlotsPage() {
  return (
    <div>
      <PageHeader icon={<SlotIcon />} title="Слоты" />
      <FlexList wrap style={{ marginTop: 30 }}>
        <GameCard icon="/images/game_2.png" onlineCount={113} />
        <GameCard icon="/images/game_2.png" onlineCount={113} />
        <GameCard icon="/images/game_2.png" onlineCount={113} />
      </FlexList>
    </div>
  );
}