import styles from "./Skeleton.module.css";

export default function ProductGallerySkeleton() {
  return (
    <div>
      {/* Main product image skeleton */}
      <div className={`${styles.skeleton}`} style={{ height: "300px", width: "100%" }} />

      {/* Small thumbnail skeletons */}
      <div style={{ marginTop: "15px", display: "flex", gap: "10px" }}>
        <div className={styles.skeleton} style={{ height: "40px", width: "40px" }} />
        <div className={styles.skeleton} style={{ height: "40px", width: "40px" }} />
        <div className={styles.skeleton} style={{ height: "40px", width: "40px" }} />
      </div>
    </div>
  );
}
