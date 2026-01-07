import Image from "next/image";
import Link from "next/link";
import styles from "./TrendingProducts.module.css";
import { getTrendingProducts } from "../../../lib/getTrendingProducts";
import { formatPrice } from "../../../utils/formatPrice";

export default async function TrendingProducts() {
  const trendingProducts = await getTrendingProducts();

  if (!trendingProducts) {
    return <p>Error fetching trending products</p>;
  }

  return (
    <section className={styles["best-sellers"]}>
      <div className={styles["product-grid"]}>
        {trendingProducts.map((product) => (
          <Link key={product.id} href={`/Products/${product.slug}`} className={styles["product-card"]}>
            <div className={styles["image-wrapper"]}>
              <Image
                src={`/images/${product.images?.[0]?.url || "default-image.jpg"}`}
                alt={product.images?.[0]?.altText || "Product Image"}
                fill
                className={styles["product-image"]}
              />
            </div>
            <div className={styles["product-info"]}>
              <p className={styles["top-deal-name"]}>{product.name}</p>
              <div className={styles["price-wrapper"]}>
                <span className={styles["price"]}>{formatPrice(product.price)}</span>
                {product.price && <span className={styles["old-price"]}>{formatPrice(product.price + 50)}</span>}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
