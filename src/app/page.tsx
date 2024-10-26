"use client";

import Button from '@/components/ui/Button';
import styles from './page.module.scss';
import { GameCard } from '@/components/GameCard';
import { useAuthPopupsStore } from '@/stores/authPopups';
import { LiveStat } from '@/features/liveStat';
import { FlexList } from '@/components/ui/FlexList';
import { Footer } from '@/components/layout/Footer';

export default function Home() {
  const { setIsSignInPopupOpen } = useAuthPopupsStore(state => state);

  return (
    <div>
      <section className={styles.bannerSection}>
        <div className={styles.banner}>
          <h2>Какой-то баннер на пол экрана</h2>
          <h4>Хочешь иметь большую балду? Тогда крути у нас бурмалду!</h4>
          <Button onClick={() => setIsSignInPopupOpen(true)}>Крутить бурмалду</Button>
        </div>

        <LiveStat />
      </section>
      <section>
        <h2 style={{ marginBottom: 30 }}>Популярное</h2>
        <FlexList>
          <GameCard icon="/images/game_2.png" onlineCount={181} />
          <GameCard icon="/images/game_2.png" onlineCount={300} />
          <GameCard icon="/images/game_2.png" onlineCount={113} />
          <GameCard icon="/images/game_2.png" onlineCount={510} />
          <GameCard icon="/images/game_2.png" onlineCount={510} />
          <GameCard icon="/images/game_2.png" onlineCount={510} />
          <GameCard icon="/images/game_2.png" onlineCount={510} />
          <GameCard icon="/images/game_2.png" onlineCount={510} />
        </FlexList>
      </section>
      <section style={{ marginTop: 60 }}>
        <h2 style={{ marginBottom: 30 }}>Слоты</h2>
          <FlexList>
            <GameCard icon="/images/game_2.png" onlineCount={113} />
            <GameCard icon="/images/game_2.png" onlineCount={510} />
            <GameCard icon="/images/game_2.png" onlineCount={42} />
          </FlexList>
      </section>
      <section style={{ marginTop: 60 }}>
        <h2 style={{ marginBottom: 30 }}>Live казино</h2>
          <FlexList>
            <GameCard icon="/images/game_4.png" onlineCount={42} />
            <GameCard icon="/images/game_3.png" onlineCount={50} />
            <GameCard icon="/images/game_4.png" onlineCount={70} />
          </FlexList>
      </section>
      <section style={{ marginTop: 60 }}>
        <h2 style={{ marginBottom: 30 }}>Наши режимы</h2>
          <FlexList>
            <GameCard icon="/images/game_5.png" onlineCount={42} />
            <GameCard icon="/images/game_6.png" onlineCount={50} />
            <GameCard icon="/images/game_5.png" onlineCount={70} />
          </FlexList>
      </section>
      <Footer />
    </div>
  );
}
