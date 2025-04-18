"use client";

import { useContext } from "react";
import { CartContext } from "../../context/ProductContext";
import styles from './CartButton.module.css'
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";

const CartButton = ({ product, name, styleType }) => {
  const { addOneToCart, removeOneFromCart, deleteCart, getProductQuantity } = useContext(CartContext);

  if (!product) {
    return <p>Loading product...</p>;
  }

  const quantity = getProductQuantity(product.id);

  return (
    <div>
      {quantity === 0 ? (
        <button className={styles[styleType]} onClick={() => addOneToCart(product, product.id)}>
         {name}
        </button>
      ) : (
        <div className={styles['btn-cover']} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <button onClick={() => addOneToCart(product, product.id)}><FaPlus size={20}/></button>
          <span>{quantity}</span>
          <button onClick={() => removeOneFromCart(product.id)}><FaMinus size={20} /></button>
          <button onClick={() => deleteCart(product.id)}><FaTrash size={20}/></button>
        </div>
      )}
    </div>
  );
};

export default CartButton;
