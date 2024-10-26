import { Input } from "@/components/ui/Input";
import styles from "./styles.module.scss";
import { useSignUpFormStore } from "../store/signUpFormStore";

export const RegisterForm = () => {
  
  const {
    email,
    password,
    setEmail,
    setPassword
  } = useSignUpFormStore(state => state);

  return (
    <form className={styles.form}>
      <div>
        <label>E-mail<span style={{ color: "#E54040" }}>*</span></label>
        <Input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label>Пароль<span style={{ color: "#E54040" }}>*</span></label>
        <Input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      </div>
    </form>
  );
}