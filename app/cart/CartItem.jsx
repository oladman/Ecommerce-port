import { MdDelete } from "react-icons/md";
import styles from "./page.module.css";
import {formatPrice} from "../../utils/formatPrice";
import Link from "next/link";

const CartItem = ({
  product,
  addOneToCart,
  removeOneFromCart,
  deleteCart,
}) => {
  const imageUrl =
    product.images?.length > 0
      ? `${process.env.NEXT_PUBLIC_BASE_URL}/images/${product.images[0].url}`
      : "/default-image.jpg";

  return (
    <Link href={`/Products/${product.slug}`} className={styles["cart-row"]}>
      <div className={styles["P-details"]}>
        <img src={imageUrl} alt={product.name} width={100} height={100} />

        <div className={styles["P-details-down"]}>
          <p className={styles["P-name"]}>{product.name}</p>
          <button
            onClick={() => deleteCart(product.id)}
            className={styles["remove-btn"]}
          >
            <MdDelete size={20} /> Remove
          </button>
        </div>
      </div>

      <div className={styles["P-price"]}>
        {formatPrice(product.price)}
      </div>

      <div className={styles["btns"]}>
        <button onClick={() => removeOneFromCart(product.id)}>-</button>
        <span>{product.quantity}</span>
        <button onClick={() => addOneToCart(product, product.id)}>+</button>
      </div>

      <div>
        {formatPrice(product.price * product.quantity)}
      </div>
    </Link>
  );
};

export default CartItem;
