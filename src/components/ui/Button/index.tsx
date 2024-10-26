import { ButtonHTMLAttributes } from "react";
import styles from "./styles.module.scss";
import classNames from "classnames";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  limegreen?: string;
}

function Button(props: ButtonProps) {
  const cls = classNames(styles.button, props.className, {[styles.lime]: props.limegreen === "true"});
  return (
    <button {...props} className={cls}>{props.children}</button>
  );
}

export default Button;