import styles from "./HeroSection.module.css";

export default function HeroSlide({ banner, isActive, priority }) {
  return (
    <div
      className={`${styles["hero-slide"]} ${
        isActive ? styles["active"] : ""
      }`}
    >
      <img
        src={`${process.env.NEXT_PUBLIC_BASE_URL}/images/${banner.image}`}
        alt={banner.title}
        className={styles["hero-image"]}
      />

      <div className={styles["hero-left-overlay"]}>
        <h2>{banner.title}</h2>
        {banner.subtitle && <h1>{banner.subtitle}</h1>}
      </div>
    </div>
  );
}
