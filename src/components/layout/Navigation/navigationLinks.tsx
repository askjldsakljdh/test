import { CrownIcon, DiamondIcon, FavouritesIcon, HistoryIcon, LiveIcon, PartnersIcon, PlayIcon, QuestionIcon, SlotIcon, UserIcon } from "@/components/icons";

export const navigationLinks = [
  [
    { label: "Избранное", href: "/favourites", icon: <FavouritesIcon /> },
    { label: "Недавние", href: "/history", icon: <HistoryIcon /> },
    { label: "Мой профиль", href: "/me", icon: <UserIcon /> },
  ],
  [
    { label: "Популярное", href: "/popular", icon: <CrownIcon /> },
    { label: "Слоты", href: "/slots", icon: <SlotIcon /> },
    { label: "Live-Казино", href: "/live", icon: <LiveIcon /> },
    { label: "Наши режимы", href: "/games", icon: <PlayIcon /> },
  ],
  [
    { label: "Партнерам", href: "/partners", icon: <PartnersIcon /> },
    { label: "Ранги", href: "/rangs", icon: <DiamondIcon /> },
  ],
  [
    { label: "Вопросы и ответы", href: "/faq", icon: <QuestionIcon /> },
  ],
];