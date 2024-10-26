import Button from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import styles from "./styles.module.scss";
import { useSignInFormStore } from "../store/signInFormState";

export const SignInForm = () => {

  const {
    email,
    password,
    setEmail,
    setPassword
  } = useSignInFormStore(state => state);

  return (
    <form className={styles.form}>
      <div>
        <label>E-mail<span style={{ color: "#E54040" }}>*</span></label>
        <Input 
          required
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label>Пароль<span style={{ color: "#E54040" }}>*</span></label>
        <Input
          required
          value={password}
          onChange={e => setPassword(e.target.value)}
          type="password"
        />
      </div>
      <Button limegreen="true">Войти</Button>
    </form>
  );
}