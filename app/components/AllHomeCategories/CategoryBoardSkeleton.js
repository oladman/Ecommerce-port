import styles from "./ProductBoard.module.css";

export default function CategoryBoardSkeleton({ count = 10 }) {
  return (
    <div className={styles["Products-Panelcat"]}>
      {Array.from({ length: count }).map((_, i) => (
        <div className={styles["productcatp"]} key={i}>
          {/* Image */}
          <div className={styles["ProductImagecatp"]}>
            <div
              className={styles.skeleton}
              style={{
                width: "100%",
                height: "140px",
                borderRadius: "8px",
              }}
            />
          </div>

          {/* Text */}
          <div className={styles["ProductTextcatp"]}>
            <div
              className={styles.skeleton}
              style={{ height: "14px", width: "90%", marginBottom: "6px" }}
            />
            <div
              className={styles.skeleton}
              style={{ height: "14px", width: "60%" }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
