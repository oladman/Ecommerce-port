import AuthCover from "../components/auth/Auth-Cover";
import LoginForm from "../components/auth/Login-Form";
import styles from "./page.module.css"
import { GiMorgueFeet } from "react-icons/gi";
const Page = () => {
  return (
    <div className={styles["Login-wrapper-cover"]}>
    <AuthCover  
      icon={<GiMorgueFeet size={30}   />}
      HeaderText="YEFFSO"
      HeaderTextTwo="Welcome Back"
      HeaderTextThree="Please login to your account"
    >
      <LoginForm />
    </AuthCover>
    </div>
  );
};

export default Page;
