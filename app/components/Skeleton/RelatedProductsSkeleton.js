import styles from "./Skeleton.module.css";

export default function RelatedProductsSkeleton() {
  return (
    <div className={styles["mt-20"]}>
      <div className={`${styles.skeleton} ${styles["h-30"]} ${styles["w-40"]}`} />

      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "20px", marginTop: "15px" }}>
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i}>
            <div className={`${styles.skeleton} ${styles["h-300"]} ${styles["w-100"]}`} />
            <div className={`${styles.skeleton} ${styles["h-20"]} ${styles["w-80"]} ${styles["mt-10"]}`} />
          </div>
        ))}
      </div>
    </div>
  );
}
