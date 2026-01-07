import styles from "@/app/Products/[slug]/page.module.css";
import { formatPrice } from "@/utils/formatPrice";

export default function ProductPrice({ price }) {
  return (
    <div className={styles["Pprice-cover"]}>
      <p className={styles["Pprice"]}>{formatPrice(price)}</p>
    </div>
  );
}
