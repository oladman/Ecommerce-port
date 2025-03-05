import styles from "./Auth-Cover.module.css";

const AuthCover = ({
  children,
  className,
  icon,
  HeaderText,
  HeaderTextTwo,
  HeaderTextThree
}) => {
  return (
    <div className={className}>
      <div className={styles["topper"]}>
        <div className={styles["icon-headerText"]} >
          <p>{icon}</p>
          <h1>{HeaderText}</h1>
        </div>
        <h2>{HeaderTextTwo}</h2>
        <p>{HeaderTextThree}</p>
      </div>

      <div>{children}</div>
    </div>
  );
};

export default AuthCover;
