"use client";

import { useRouter } from "next/navigation";
import styles from "./CategoryCard.module.css";
import CategoryCard from "./CategoryCard";

export default function PageHeader({ title, categories }) {
  const router = useRouter();

  return (
    <div className={styles["header-row"]}>
      <p className={styles["shop-category"]}>
        Shop by Category
      </p>
      <h1 className={styles["page-title"]}>{title}</h1>

      <div className={styles["subcategories-container"]}>
        <div className={styles["categories-row"]}>
          {categories.map((cat) => (
            <CategoryCard
              key={cat.slug}
              category={cat}
              onClick={() => router.push(`/${cat.slug}`)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
