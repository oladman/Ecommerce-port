import Link from "next/link";
import styles from "./ProductBoard.module.css";

export default function ProductBoardUI({ products, imagePath = "/images/" }) {
  return (
    <>
      {products.map((Product) => (
        <div className={styles["productcatp"]} key={Product.id}>
          <Link
            href={`/Products/${Product.slug}`}
            className={styles["Link-catp"]}
          >
            <div className={styles["ProductImagecatp"]}>
              <div className={styles["image-open"]}>
                <img
                  src={`${imagePath}/${Product.images?.[0]?.url || "default-image.jpg"}`}
                  alt={Product.images?.[0]?.altText || "Product Image"}
                />
              </div>
            </div>

            <div className={styles["ProductTextcatp"]}>
              <p className={styles["ProductNamecatp"]}>{Product.name}</p>
              <p className={styles["MainPricecatp"]}>${Product.price}</p>
            </div>
          </Link>
        </div>
      ))}
    </>
  );
}
