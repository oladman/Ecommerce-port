import Link from 'next/link';
import styles from './CategoryItem.module.css';

const CategoryItem = ({ link, imageSrc, altText, backgroundColor, categoryName }) => {
  return (
    <Link className={styles["image-category-item"]} href={link}>
      <div className={styles["top-category-item"]} style={{ background: backgroundColor }}>
        <img src={imageSrc} alt={altText} />
      </div>
      <div className={styles["bottom-category-item"]}>
        <p>{categoryName}</p>
      </div>
    </Link>
  );
};

export default CategoryItem;
