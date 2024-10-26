import { UserIcon } from "@/components/icons";
import styles from "./styles.module.scss";
import { PageHeader } from "@/components/layout/PageHeader";

export default function MyProfilePage() {
  return (
    <div>
      <PageHeader icon={<UserIcon />} title="Мой профиль" />
    </div>
  );
}