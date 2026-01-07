"use client";

import styles from "./CategoryCard.module.css";

export default function SortOption({ option, isSelected, onSelect }) {
  return (
    <label className={styles["sort-option"]} onClick={onSelect}>
      <input
        type="radio"
        className={styles["sort-radio"]}
        checked={isSelected}
        readOnly
      />
      {option.label}
    </label>
  );
}
