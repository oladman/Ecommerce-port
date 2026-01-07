import styles from "@/app/Products/[slug]/page.module.css";
export default function ProductVariants({ variants }) {
  const colors = [
    ...new Set(variants?.map(v => v.color).filter(Boolean)),
  ];

  const sizes = [
    ...new Set(variants?.map(v => v.size).filter(Boolean)),
  ];

  return (
    <>
      <div className={styles["PColor"]}>
        <p>Color:</p>
        <p>{colors.length ? colors.join(", ") : "No colors available"}</p>
      </div>

      <div className={styles["Psize"]}>
        <p>Sizes:</p>
      </div>

      <div className={styles["sizes"]}>
        {sizes.length ? (
          sizes.map((size, index) => (
            <div key={index} className={styles["each-sizes"]}>
              {size}
            </div>
          ))
        ) : (
          <div>No sizes available</div>
        )}
      </div>
    </>
  );
}
