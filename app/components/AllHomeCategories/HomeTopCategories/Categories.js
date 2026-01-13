import CategoryItem from "./CategoryItem";
import styles from "./Categories.module.css";

const categories = [
 {
    link: "/homekitchen",
    imageSrc: "/assets/category/home2.jpg",
    altText: "Home & Kitchen",
    categoryName: "Home & Kitchen",
  },
  {
    link: "/electronics",
    imageSrc: "/assets/category/electronics.jpg",
    altText: "Electronics",
    categoryName: "Electronics",
  },
    {
    link: "/computers",
    imageSrc: "/assets/category/computers.jpg",
    altText: "Computers",
    categoryName: "Computers",
  },
  {
    link: "/fashion",
    imageSrc: "/assets/category/fashion.jpg",
    altText: "Fashion",
    categoryName: "Fashion",
  },
   {
    link: "/arts",
    imageSrc: "/assets/category/arts.jpg",
    altText: "arts",
    categoryName: "Arts",
  },
   {
    link: "/sports",
    imageSrc: "/assets/category/sports.jpg",
    altText: "Sports",
    categoryName: "Sports",
  }

];

const Categories = () => {
  return (
    <section className={styles["cover-image-category"]}>
      <div className={styles["image-category"]}>
        {categories.map((category) => (
          <CategoryItem key={category.link} {...category} />
        ))}
      </div>
    </section>
  );
};

export default Categories;
