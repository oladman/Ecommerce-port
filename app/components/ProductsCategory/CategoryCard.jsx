"use client";

import styles from "./CategoryCard.module.css";

export default function CategoryCard({ category, onClick }) {
  return (
    <div
      className={styles["category-card"]}
      onClick={onClick}
      style={{ cursor: "pointer" }}
    >
      <img
        src={category.image}
        alt={category.name}
        className={styles["category-image"]}
      />
      <span className={styles["category-name"]}>{category.name}</span>
    </div>
  );
}
