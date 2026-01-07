import { useEffect, useRef } from "react";
import SliderContent from "./SliderContent";
import styles from "./HeroSection.module.css";

export default function ProductSliderRow({ products, reverse, active }) {
  const ref = useRef(null);
  const cardWidth = 180;

  useEffect(() => {
    if (!products.length || !ref.current) return;

    const index = reverse
      ? products.length - 1 - (active % products.length)
      : active % products.length;

    ref.current.scrollTo({
      left: index * cardWidth,
      behavior: "smooth",
    });
  }, [active, products, reverse]);

  return (
    <div className={styles["product-slider"]} ref={ref}>
      <SliderContent products={products} />
    </div>
  );
}
