import Image from "next/image";
import Link from "next/link";
import styles from "./RelatedProducts.module.css";
import { FiShoppingCart } from "react-icons/fi";

export default function RelatedProducts({ products, formatPrice }) {
  if (!products || products.length === 0) return null;

  return (
    <div className={styles["related-wrapper"]}>
      <h2 className={styles["related-title"]}>Related Products</h2>

      <div className={styles["related-grid"]}>
        {products.map((product) => (
          <div className={styles["related-card"]} key={product.id}>
            <Link href={`/Products/${product.slug}`}>
            
              <div className={styles["image-wrapper"]}>
                {product.onSale && (
                  <span className={styles["sale-badge"]}>SALE</span>
                )}

                <Image
                  src={`${process.env.NEXT_PUBLIC_BASE_URL}/images/${product.images[0]?.url}`}
                  alt={product.name}
                  width={300}
                  height={380}
                  className={styles["product-image"]}
                />
              </div>
            </Link>

            <div className={styles["card-content"]}>
              <p className={styles["product-name"]}>{product.name}</p>

              <div className={styles["price-cart"]}>
                <div className={styles["price-box"]}>
                  <span className={styles["price"]}>
                    {formatPrice(product.price)}
                  </span>

                  {product.price && (
                    <del className={styles["old-price"]}>
                      {formatPrice(product.price + 100)}
                    </del>
                  )}
                </div>

                <button className={styles["cart-btn"]}>
                  <FiShoppingCart size={16} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
