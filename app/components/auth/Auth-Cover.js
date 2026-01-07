import styles from "./Auth-Cover.module.css";
import Image from "next/image";
const AuthCover = ({
  children,
  className,
  HeaderTextTwo,
  HeaderTextThree
}) => {
  return (
    <div className={className}>
      <div className={styles["topper"]}>
        <Image
          src="/assets/logos/main-logo.png"
          alt="Main Logo"
          width={150} // replace with your desired width
          height={50} // replace with your desired height
          style={{ objectPosition:'center', objectFit:'cover' }}
        />
        <div className={styles["icon-headerText"]} >
        
        </div>
        <h2>{HeaderTextTwo}</h2>
        <p>{HeaderTextThree}</p>
      </div>

      <div>{children}</div>
    </div>
  );
};

export default AuthCover;
