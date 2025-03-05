import AuthCover from "../components/auth/Auth-Cover"
import RegisterForm from "../components/auth/Register-Form"
import styles from "./page.module.css"
import { GiMorgueFeet } from "react-icons/gi";
export const dynamic = "force-dynamic";


const Page = () => {
  return (
    <div className={styles["Login-wrapper-cover"]}>
      <AuthCover  
        icon={<GiMorgueFeet size={30} />}
        HeaderText="YEFFSO"
        HeaderTextTwo="Register Account"
        HeaderTextThree="Please to your account"
      >
        <RegisterForm />
      </AuthCover>
    </div>
  );
};

export default Page;
