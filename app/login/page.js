import AuthCover from "../components/auth/Auth-Cover";
import LoginForm from "../components/auth/Login-Form";
import styles from "./page.module.css";
import { GiMorgueFeet } from "react-icons/gi";

export const dynamic = "force-dynamic";
const Page = () => {
  return (
    <AuthCover
      icon={<GiMorgueFeet size={30} />}
      HeaderText="YEFFSO"
      HeaderTextTwo="Welcome Back"
      HeaderTextThree="Please login to your account"
      className={styles["Auth-cover"]}
    >
      <div className={styles["Login-wrapper-cover"]}>
        <LoginForm />
      </div>
    </AuthCover>
  );
};

export default Page;
