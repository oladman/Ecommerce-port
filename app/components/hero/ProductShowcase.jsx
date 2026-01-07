import useFetch from "./useFetch";
import useAutoSlider from "./useAutoSlider";
import ProductSliderRow from "./ProductSliderRow";
import styles from "./HeroSection.module.css";

export default function ProductShowcase() {
  const { data } = useFetch("/api/products/top-rated");

  const top = data.filter((_, i) => i % 2 === 0);
  const bottom = data.filter((_, i) => i % 2 !== 0);

  const maxLength = Math.max(top.length, bottom.length);
  const { active } = useAutoSlider(maxLength, 3000);

  return (
    <div className={styles["hero-right"]}>
      <h2 className={styles["hero-title"]}>
        Discover our top-rated products <br className={styles["br"]} />
        trusted by customers for <span>Quality & Value.</span>
      </h2>

      <p className={styles["hero-subtitle"]}>Few of our best sellers...</p>

      <div className={styles["product-slider-container"]}>
        <ProductSliderRow products={top} active={active} />
        <ProductSliderRow products={bottom} active={active} reverse />
      </div>
    </div>
  );
}
