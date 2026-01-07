import styles from "./Skeleton.module.css";

export default function ProductTabsSkeleton() {
  return (
    <div className={styles["mt-20"]}>
      <div className={`${styles.skeleton} ${styles["h-30"]} ${styles["w-40"]}`} />
      <div className={`${styles.skeleton} ${styles["h-20"]} ${styles["w-100"]} ${styles["mt-10"]}`} />
      <div className={`${styles.skeleton} ${styles["h-20"]} ${styles["w-100"]} ${styles["mt-10"]}`} />
      <div className={`${styles.skeleton} ${styles["h-20"]} ${styles["w-80"]} ${styles["mt-10"]}`} />
    </div>
  );
}
