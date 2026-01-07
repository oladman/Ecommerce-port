"use client";

import styles from "./CategoryCard.module.css";
import ProductCard from "./ProductCard";

export default function ProductGrid({ products, loading }) {
  if (loading) {
    return (
      <div className={styles["products-grid"]}>
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className={styles["skeleton-card"]} />
        ))}
      </div>
    );
  }

  if (!loading && products.length === 0) {
    return <p>No products available.</p>;
  }

  return (
    <div className={styles["products-grid"]}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
