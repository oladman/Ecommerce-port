import styles from "./DividerWithText.module.css"
const DividerWithText = ({ text }) => {
    return (
      <div className={styles["line-container"]}>
        <hr className={styles["line"]} />
        <span className={styles["text"]}>{text}</span>
        <hr className={styles["line"]} />
      </div>
    );
  };
  
  export default DividerWithText;
  