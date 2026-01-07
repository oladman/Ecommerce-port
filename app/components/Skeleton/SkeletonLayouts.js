import Skeleton from "./Skeleton";
import styles from "./Skeleton.module.css";

/* 🖼 Product Gallery */
export function ProductGallerySkeleton() {
  return (
    <div className={styles.stack}>
      <Skeleton height="420px" />
      <Skeleton width="40%" height="50px" />
    </div>
  );
}

/* 📝 Product Info */
export function ProductInfoSkeleton() {
  return (
    <div className={styles.stack}>
      <Skeleton width="80%" height="32px" />
      <Skeleton width="60%" height="20px" />
      <Skeleton width="40%" height="28px" />
      <Skeleton height="48px" />
    </div>
  );
}

/* 📑 Product Tabs */
export function ProductTabsSkeleton() {
  return (
    <div className={styles.stack}>
      <Skeleton width="35%" height="30px" />
      <Skeleton height="18px" />
      <Skeleton height="18px" />
      <Skeleton width="80%" height="18px" />
    </div>
  );
}

/* 🧩 Related Products */
export function RelatedProductsSkeleton() {
  return (
    <div className={styles.stack}>
      <Skeleton width="30%" height="30px" />
      <div className={styles["grid-products"]}>
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className={styles.stack}>
            <Skeleton height="280px" />
            <Skeleton width="80%" height="18px" />
            <Skeleton width="50%" height="18px" />
          </div>
        ))}
      </div>
    </div>
  );
}
