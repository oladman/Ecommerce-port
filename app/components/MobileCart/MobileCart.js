"use client";
import styles from "./MobileCart.module.css";
import { useContext } from "react";
import { CartContext } from "../../context/ProductContext";
import { GoTrash } from "react-icons/go";
import { MdKeyboardArrowRight } from "react-icons/md";

const MobileCart = () => {
  const {
    items,
    addOneToCart,
    removeOneFromCart,
    deleteCart,
    getProductQuantity,
  } = useContext(CartContext);

  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      minimumFractionDigits: 2,
    })
      .format(price)
      .replace("NGN", "₦") // Ensures proper Naira symbol placement
      .trim();
  };

  return (
    <div id="wrapper">
      <div className={styles["cart"]}>
        <div className={styles["Page-nav-cat"]}>
          <div className={styles["_CatName"]}>
            <p>Home</p>
            <div>
              <MdKeyboardArrowRight
                style={{ display: "flex", alignItems: "center" }}
              />
            </div>
          </div>

          <p>Cart</p>
        </div>
        <h1>Shopping Cart</h1>

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
                        {formatPrice(product.price)}
                      </div>
                      <p className={styles["stock"]}>in Stock </p>
                      <div className={styles["btns"]}>
                        <button onClick={() => removeOneFromCart(product.id)}>
                          -
                        </button>
                        <span> {product.quantity} </span>
                        <button
                          onClick={() => addOneToCart(product, product.id)}
                        >
                          +
                        </button>
                      </div>
                      <div className={styles["del-btn"]}>
                        <GoTrash
                          size={20}
                          onClick={() => {
                            deleteCart(product.id);
                          }}
                        />
                        Remove Item
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </>
        )}
      </div>
    </div>
  );
};

export default MobileCart;
