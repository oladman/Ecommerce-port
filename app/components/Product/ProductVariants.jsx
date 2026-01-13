import styles from "@/app/Products/[slug]/page.module.css";

export default function ProductVariants({ variants }) {
  const colors = [...new Set(variants?.map(v => v.color).filter(Boolean))];
  const sizes = [...new Set(variants?.map(v => v.size).filter(Boolean))];

  // If no variants at all, render nothing
  if (!colors.length && !sizes.length) {
    return null;
  }

  return (
    <div className={styles["variants"]}>
      {colors.length > 0 && (
        <div>
          <p className={styles["label"]}>Color</p>
          <div className={styles["optionRow"]}>
            {colors.map(color => (
              <button
                key={color}
                className={styles["optionChip"]}
              >
                {color}
              </button>
            ))}
          </div>
        </div>
      )}

      {sizes.length > 0 && (
        <div>
          <p className={styles["label"]}>Size</p>
          <div className={styles["optionRow"]}>
            {sizes.map(size => (
              <button
                key={size}
                className={styles["optionChip"]}
              >
                {size}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
