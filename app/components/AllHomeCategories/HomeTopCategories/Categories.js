import CategoryItem from "./CategoryItem";
import styles from "./Categories.module.css";

const categories = [
  {
    link: "/accessories",
    imageSrc: "/assets/category/home2.jpg",
    altText: "Home",
    backgroundColor: "#f2d5cd",
    categoryName: "Home",
  },
  {
    link: "/men",
    imageSrc: "/assets/category/electronics8.jpg",
    altText: "Electronics",
    backgroundColor: "#B7B7B7",
    categoryName: "Electronics",
  },
  {
    link: "/women",
    imageSrc: "/assets/category/women1.jpg",
    altText: "Fashion",
    backgroundColor: "#499d90",
    categoryName: "Fashion",
  },
  {
    link: "/kids",
    imageSrc: "/assets/category/kid1.jpg",
    altText: "Toys",
    backgroundColor: "#C4E1F6",
    categoryName: "Kids",
  },
];

const Categories = () => {
  return (
    <section className={styles["cover-image-category"]}>
      <h1>Categories</h1>

      <div className={styles["image-category"]}>
        {categories.map((category) => (
          <CategoryItem
            key={category.link}
            {...category}
          />
        ))}
      </div>
    </section>
  );
};

export default Categories;
