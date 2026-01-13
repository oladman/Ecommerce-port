"use client";

import { useContext } from "react";
import { CartContext } from "../../context/ProductContext";
import styles from "./CartButton.module.css";
import Button from "./Button";
import { FaPlus, FaMinus, FaTrash } from "react-icons/fa";

const CartButton = ({ product }) => {
  const {
    addOneToCart,
    removeOneFromCart,
    deleteCart,
    getProductQuantity,
  } = useContext(CartContext);

  if (!product) return null;

  const quantity = getProductQuantity(product.id);

  return (
    <div className={styles["cart-controls"]}>
      {/* Quantity Selector */}
      <div className={styles["qty"]}>
        <button
          className={styles["qty-btn"]}
          onClick={() => removeOneFromCart(product.id)}
          disabled={quantity === 0}
        >
          <FaMinus />
        </button>

        <span className={styles["qty-value"]}>{quantity}</span>

        <button
          className={styles["qty-btn"]}
          onClick={() => addOneToCart(product, product.id)}
        >
          <FaPlus />
        </button>
      </div>

      {/* Add to Cart */}
      <Button
        className={styles["btn-cover"]}
        onClick={() => addOneToCart(product, product.id)}
      >
        Add to Cart
      </Button>

      {/* Remove (Trash) */}
      {quantity > 0 && (
        <button
          className={styles["remove-btn"]}
          onClick={() => deleteCart(product.id)}
          aria-label="Remove from cart"
        >
          <FaTrash />
        </button>
      )}
    </div>
  );
};

export default CartButton;
