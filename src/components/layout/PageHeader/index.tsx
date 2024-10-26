import styles from "./styles.module.scss";

type Props = {
  icon?: React.ReactNode;
  title: string;
}

export const PageHeader = ({ icon, title }: Props) => {
  return (
    <div className={styles.pageHeader}>
      <span className={styles.pageIcon}>
        { icon }
      </span>
      <h1>{ title }</h1>
    </div>
  );
}