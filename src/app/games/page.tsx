import { GameCard } from "@/components/GameCard";
import { PlayIcon } from "@/components/icons";
import { PageHeader } from "@/components/layout/PageHeader";
import { FlexList } from "@/components/ui/FlexList";

export default function GamesPage() {
  return (
    <div>
      <PageHeader icon={<PlayIcon />} title="Наши режимы" />
      <FlexList wrap style={{ marginTop: 30 }}>
        <GameCard icon="/images/game_5.png" onlineCount={113} />
        <GameCard icon="/images/game_6.png" onlineCount={113} />
        <GameCard icon="/images/game_5.png" onlineCount={113} />
      </FlexList>
    </div>
  );
}