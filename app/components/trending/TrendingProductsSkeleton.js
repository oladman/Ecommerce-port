import styles from "./TrendingProducts.module.css";

export default function TrendingProductsSkeleton({ count = 4 }) {
  return (
    <section className={styles["best-sellers"]}>
      <div className={styles["product-grid"]} style={{ gap: "20px" }}>
        {Array.from({ length: count }).map((_, i) => (
          <div key={i} className={styles["product-card"]}>
            {/* Image skeleton */}
            <div
              className={`${styles.skeleton}`}
              style={{
                position: "relative",
                width: "100%",
                paddingBottom: "125%",
                borderRadius: "8px",
                overflow: "hidden",
              }}
            />

            {/* Info skeleton */}
            <div className={styles["product-info"]} style={{ marginTop: "10px" }}>
              <div
                className={styles.skeleton}
                style={{ height: "16px", width: "80%", marginBottom: "6px", borderRadius: "4px" }}
              />
              <div style={{ display: "flex", gap: "6px" }}>
                <div className={styles.skeleton} style={{ height: "16px", width: "50px", borderRadius: "4px" }} />
                <div className={styles.skeleton} style={{ height: "16px", width: "30px", borderRadius: "4px" }} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
