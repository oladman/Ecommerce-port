import Link from "next/link";
import styles from "./page.module.css";

const CartBreadcrumb = () => {
  return (
    <div className={styles["breadcrumb"]}>
      <Link className={styles["breadcrumb-link-name"]} href="/">
        Home
      </Link>
      <Link className={styles["breadcrumb-link-name"]} href="/cart">
        Cart
      </Link>
    </div>
  );
};

export default CartBreadcrumb;
