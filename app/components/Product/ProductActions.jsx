"use client";

import { FiShare } from "react-icons/fi";
import { LuHeart } from "react-icons/lu";
import styles from "../../Products/[slug]/page.module.css";

export default function ProductActions() {
  return (
    <div className={styles["overal-cover-product-details-icon"]}>
      <div className={styles["cover-product-details-icon"]}>
        <FiShare size={18} />
      </div>
      <div className={styles["cover-product-details-icon"]}>
        <LuHeart size={18} />
      </div>
    </div>
  );
}
