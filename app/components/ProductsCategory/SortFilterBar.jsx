"use client";

import { useState } from "react";
import { IoChevronDown } from "react-icons/io5";
import styles from "./CategoryCard.module.css";
import SortOption from "./SortOption";

const SORT_OPTIONS = [
  { key: "popularity", label: "Popularity" },
  { key: "newest", label: "Newest Arrivals" },
  { key: "priceLow", label: "Price: Low to High" },
  { key: "priceHigh", label: "Price: High to Low" },
  { key: "rating", label: "Product Rating" },
];

export default function SortFilterBar({ sortBy, setSortBy, itemCount }) {
  const [sortOpen, setSortOpen] = useState(false);

  return (
    <div className={styles["filter-row"]}>
      <div className={styles["sort-wrapper"]}>
        <button
          className={styles["sort-button"]}
          onClick={() => setSortOpen(!sortOpen)}
        >
          Sort by: {SORT_OPTIONS.find((s) => s.key === sortBy)?.label}
          <IoChevronDown
            className={`${styles["sort-arrow"]} ${sortOpen ? styles["open"] : ""}`}
          />
        </button>

        {sortOpen && (
          <div className={styles["sort-dropdown"]}>
            {SORT_OPTIONS.map((opt) => (
              <SortOption
                key={opt.key}
                option={opt}
                isSelected={sortBy === opt.key}
                onSelect={() => {
                  setSortBy(opt.key);
                  setSortOpen(false);
                }}
              />
            ))}
          </div>
        )}
      </div>

      <span className={styles["items-count"]}>
        {itemCount} {itemCount === 1 ? "Item" : "Items"}
      </span>
    </div>
  );
}
