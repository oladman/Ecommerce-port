import styles from "./Skeleton.module.css";

export default function ProductInfoSkeleton() {
  return (
    <div>
      <div className={`${styles.skeleton} ${styles["h-30"]} ${styles["w-80"]}`} />
      <div className={`${styles.skeleton} ${styles["h-20"]} ${styles["w-60"]} ${styles["mt-10"]}`} />
      <div className={`${styles.skeleton} ${styles["h-30"]} ${styles["w-40"]} ${styles["mt-15"]}`} />

      <div className={styles["mt-20"]}>
        <div className={`${styles.skeleton} ${styles["h-40"]} ${styles["w-100"]}`} />
      </div>
    </div>
  );
}
