"use client";

import { useState, useEffect } from "react";
import TrendingProductsSkeleton from "./TrendingProductsSkeleton";
import TrendingProductsCard from "./TrendingProductsCard";
import styles from "./TrendingProducts.module.css";

export default function TrendingProductsWrapper() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    fetch("/api/trending-products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch(() => setProducts([]));
  }, []);

  if (!products) return <TrendingProductsSkeleton count={4} />;

  if (products.length === 0) return <p>No trending products available.</p>;

  return (
    <section className={styles["best-sellers"]}>
      <div className={styles["product-grid"]}>
        {products.map((product) => (
          <TrendingProductsCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
