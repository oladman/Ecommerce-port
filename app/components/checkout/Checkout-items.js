import { useContext } from "react";
import { CartContext } from "../../context/ProductContext";
import styles from "./Checkout-items.module.css";
import {formatPrice} from "../../../utils/formatPrice";
const CheckOutItem = () => {
  const {
    items,
    addOneToCart,
    removeOneFromCart,
    deleteCart,
    getProductQuantity,
  } = useContext(CartContext);


  return (
    <div id="wrapper">
      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {items.map((product) => {
              const imageUrl =
                product.images?.length > 0
                  ? `${process.env.NEXT_PUBLIC_BASE_URL}/images/${product.images[0].url}`
                  : "/default-image.jpg"; // Fallback if no image

              return (
                <li key={product.id} className={styles["cart-row"]}>
                  <div className={styles["P-details"]}>
                    <img
                      src={imageUrl}
                      alt={product.name}
                      width={50}
                      height={50}
                    />
                  </div>

                  <div className={styles["P-about"]}>
                    <p className={styles["P-name"]}>{product.name}</p>
                    <div className={styles["P-price"]}>
                      {formatPrice(product.price)}
                    </div>

                    <div className={styles["btns"]}>
                      <span>Qty: {product.quantity} </span>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </>
      )}
    </div>
  );
};

export default CheckOutItem;
