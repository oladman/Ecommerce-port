import { useRouter } from "next/navigation";
import styles from "./login-button.module.css"

const LoginButton = ({ children }) => {
  const router = useRouter();

  const onClick = () => {
    router.push("/login");
  };

  return <span className={styles['btn']} onClick={onClick}>{children}</span>; 
};

export default LoginButton;
