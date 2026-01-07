import styles from "./Skeleton.module.css";

export default function Skeleton({
  width = "100%",
  height = "20px",
  radius = "6px",
  className = "",
}) {
  return (
    <div
      className={`${styles.skeleton} ${className}`}
      style={{
        width,
        height,
        borderRadius: radius,
      }}
    />
  );
}
