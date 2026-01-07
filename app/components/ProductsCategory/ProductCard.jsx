"use client";
import Link from "next/link";
import styles from "./CategoryCard.module.css";
import { truncateWords } from "@/utils/truncateWords"; // 👈 import

export default function ProductCard({ product }) {
  return (
    <Link href={`/Products/${product.slug}`} className={styles["product-card"]}>
      <div className={styles["image-wrapper"]}>
        <img
          src={`${process.env.NEXT_PUBLIC_BASE_URL}/images/${
            product.images?.[0]?.url || "placeholder.png"
          }`}
          alt={product.name}
        />
      </div>

      <h3 className={styles["product-title"]}>{truncateWords(product.name, 10)}</h3>
      <p className={styles["product-category"]}>
        {product.category?.name || "Uncategorized"}
      </p>
      <p className={styles["product-price"]}>
        ${product.price?.toFixed(2) || "0.00"}
      </p>
    </Link>
  );
}
