import AuthCover from "../components/auth/Auth-Cover";
import RegisterForm from "../components/auth/Register-Form";
import styles from "./page.module.css";
import { GiMorgueFeet } from "react-icons/gi";
export const dynamic = "force-dynamic";

const Page = () => {
  return (
    <AuthCover
        icon={<GiMorgueFeet size={30} />}
        HeaderText="YeffsoStore"
        HeaderTextTwo="Register Account"
        HeaderTextThree=""
        className={styles["Auth-cover"]}
      >
    <div  className={styles["Login-wrapper-cover"]}>
     
        <RegisterForm />
    
    </div>
    </AuthCover>

  );
};

export default Page;
