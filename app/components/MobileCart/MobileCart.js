"use client";
import styles from "./MobileCart.module.css";
import { useContext } from "react";
import { CartContext } from "../../context/ProductContext";
import Link from "next/link";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import CheckoutButton from "../Buttons/CheckoutButton";


const MobileCart = () => {
  const {
    items,
    addOneToCart,
    removeOneFromCart,
    deleteCart,
    getProductQuantity,
  } = useContext(CartContext);

    const formatPrice = (price) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
    }).format(price);

  return (
    <div id="wrapper">
      <div className={styles["cart"]}>
      <div className={styles["breadcrumb"]}>
            <Link className={styles["breadcrumb-link-name"]} href={"/"}>
              Home
            </Link>
            <Link className={styles["breadcrumb-link-name"]} href={"/cart"}>
              cart
            </Link>
          </div>

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
                        width={100}
                        height={100}
                      />
                    </div>

                    <div className={styles["P-about"]}>
                      <h2 className={styles["P-name"]}>{product.name}</h2>
                      <div className={styles["P-price"]}>
                        {formatPrice(product.price)} <del className={styles["Discount"]}>
                 {parseInt(product.price) + 100}.00
              </del>
                      </div>
                      <p className={styles["stock"]}>in Stock </p>
                      <div className={styles["qty-box"]}>
  <button onClick={() => removeOneFromCart(product.id)}>
    <FaMinus />
  </button>

  <span className={styles["qty"]}>{product.quantity}</span>

  <button onClick={() => addOneToCart(product, product.id)}>
    <FaPlus />
  </button>
</div>

                      <button className={styles["del-btn"]}  onClick={() => {
                            deleteCart(product.id);
                          }}>
                       <MdDelete size={20} className={styles["icon"]} /> <p>Remove</p>
                      </button>
                    </div>
                  </li>
                  
                );
              })}
            </ul>
         

            <CheckoutButton className={styles["checkout-btn"]}>
  Proceed to Checkout · {formatPrice(
    items.reduce((t, i) => t + i.price * i.quantity, 0)
  )}
</CheckoutButton>

          </>
        )}
      </div>
    </div>
  );
};

export default MobileCart;
