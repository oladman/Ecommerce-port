import Link from "next/link";
import styles from "./Breadcrumb.module.css";

export default function Breadcrumb({ category, subcategory, productName, productSlug }) {
  return (
    <div className={styles["breadcrumb"]}>
      {/* Home always */}
      <Link className={styles["breadcrumb-link-name"]} href="/">
        Home
      </Link>

      {/* Main category */}
      {category && (
        <Link
          className={styles["breadcrumb-link-name"]}
          href={`/${category.slug}`}
        >
          {category.name}
        </Link>
      )}

      {/* Subcategory */}
      {subcategory && subcategory.name && (
        <Link
          className={styles["breadcrumb-link-name"]}
          href={`/${category.slug}/${subcategory.slug}`}
        >
          {subcategory.name}
        </Link>
      )}

      {/* Product */}
      {productName && productSlug && (
        <Link
          className={styles["breadcrumb-link-name"]}
          href={`/Products/${productSlug}`}
        >
          {productName}
        </Link>
      )}
    </div>
  );
}
