import CategoryItem from './CategoryItem';
import styles from './Categories.module.css'

const Categories = () => {
  return (
    <>
    <div className={styles["cover-image-category"]} >
      <p>Select Categories</p>
    <div className={styles["image-category"]}>
      <CategoryItem
        link="/men"
        imageSrc="/assets/category/men.png"
        altText="Men"
        backgroundColor="#B7B7B7"
        categoryName="Men"
      />
      <CategoryItem
        link="/women"
        imageSrc="/assets/category/women.png"
        altText="Women"
        backgroundColor="#499d90 "
        categoryName="Women"
      />
      <CategoryItem
        link="/kids"
        imageSrc="/assets/category/kid.png"
        altText="Kids"
        backgroundColor="#C4E1F6"
        categoryName="Kids"
      />
      <CategoryItem
        link="/accessories"
        imageSrc="/assets/category/acce2.png"
        altText="Accessories"
        backgroundColor="#f2d5cd"
        categoryName="Accessories"
      />
    </div>
    </div>
  
    </>
  );
};

export default Categories;
