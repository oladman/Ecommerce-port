import Link from "next/link";
import styles from "./CategoryItem.module.css";

const CategoryItem = ({ link, imageSrc, altText, categoryName }) => {
  return (
    <Link href={link} className={styles["image-category-item"]}>
      <div className={styles["image-wrapper"]}>
        <img src={imageSrc} alt={altText} />
      </div>
      <p className={styles["category-title"]}>{categoryName}</p>
    </Link>
  );
};

export default CategoryItem;
