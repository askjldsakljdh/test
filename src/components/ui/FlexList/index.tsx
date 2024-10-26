import classNames from "classnames";
import styles from "./styles.module.scss";

type Props = {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  wrap?: boolean;
}

export const FlexList = ({ children, className, style, wrap }: Props) => {
  return (
    <div style={style} className={classNames({
      [styles.flexListWrap]: wrap,
      [styles.flexList]: !wrap,
    }, className)}>
      {children}
    </div>
  );
}
