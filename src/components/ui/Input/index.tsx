import styles from "./styles.module.scss";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  type?: string;
  className?: string;
}

export const Input = ({ type = "text", className, ...props }: Props) => {
  return (
    <input {...props} type={type} className={styles.input + " " + className} />
  );
}
