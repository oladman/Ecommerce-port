"use client";

import HeroSlider from "./HeroSlider";
import ProductShowcase from "./ProductShowcase";
import styles from "./HeroSection.module.css";

export default function HeroSection() {
  return (
    <section className={styles["hero-wrapper"]}>
      <HeroSlider />
      <ProductShowcase />
    </section>
  );
}
