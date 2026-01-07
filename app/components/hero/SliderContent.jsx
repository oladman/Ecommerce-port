import Link from "next/link";
import Image from "next/image";
import styles from "./HeroSection.module.css";

const SliderContent = ({ products }) => {
  if (!products || products.length === 0) return null;

  return (
    <>
      {products.map((product) => (
        <Link
          href={`/Products/${product.slug}`}
          className={styles["product-card"]}
          key={product.id}
        >
          {product.images?.[0] && (
            <Image
              className={styles["product-image"]}
              src={`/images/${product.images[0].url || "default-image.jpg"}`}
              alt={product.name}
              width={120}
              height={120}
              priority={false}
            />
          )}

          <div className={styles["product-card-details"]}>
            <p>{product.name}</p>

            <div className={styles["product-card-price"]}>
              <span>${product.price}</span>
              {product.avgRating > 0 && (
                <span>⭐ {product.avgRating.toFixed(1)}</span>
              )}
            </div>
          </div>
        </Link>
      ))}
    </>
  );
};

export default SliderContent;
