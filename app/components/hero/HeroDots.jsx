import styles from "./HeroSection.module.css";

export default function HeroDots({ count, active, onChange }) {
  return (
    <div className={styles["hero-dots"]}>
      {Array.from({ length: count }).map((_, i) => (
        <span
          key={i}
          className={`${styles["dot"]} ${
            i === active ? styles["active-dot"] : ""
          }`}
          onClick={() => onChange(i)}
        />
      ))}
    </div>
  );
}
