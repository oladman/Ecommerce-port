import Link from "next/link";
import styles from "./ProductBoard.module.css";

export default function ProductCard({ product, imagePath, formatPrice }) {
  return (
    <div className={styles["productcatp"]}>
      <Link href={`/Products/${product.slug}`} className={styles["Link-catp"]}>
        <div className={styles["ProductImagecatp"]}>
          <div className={styles["image-open"]}>
            <img
              src={`${imagePath}/${product.images?.[0]?.url || "default-image.jpg"}`}
              alt={product.images?.[0]?.altText || "Default Product Image"}
            />
          </div>
        </div>
        <div className={styles["ProductTextcatp"]}>
          <p className={styles["ProductNamecatp"]}>{product.name}</p>
          <p className={styles["MainPricecatp"]}>{formatPrice(product.price)}</p>
          <del className={styles["del-style"]}>${parseInt(product.price) + 100}.00</del>
        </div>
      </Link>
    </div>
  );
}
