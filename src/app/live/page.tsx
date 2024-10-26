import { GameCard } from "@/components/GameCard";
import { LiveIcon } from "@/components/icons";
import { PageHeader } from "@/components/layout/PageHeader";
import { FlexList } from "@/components/ui/FlexList";

export default function LivePage() {
  return (
    <div>
      <PageHeader icon={<LiveIcon />} title="Live-казино" />
      <FlexList wrap style={{ marginTop: 30 }}>
        <GameCard icon="/images/game_3.png" onlineCount={113} />
        <GameCard icon="/images/game_4.png" onlineCount={113} />
        <GameCard icon="/images/game_3.png" onlineCount={113} />
      </FlexList>
    </div>
  );
}