"use client";
import styles from "./page.module.css";
import { useContext } from "react";
import { CartContext } from "../context/ProductContext";
import Link from "next/link";
import { GoTrash } from "react-icons/go";
import { MdKeyboardArrowRight } from "react-icons/md";
import MobileCart from "../components/MobileCart/MobileCart";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { HiArrowLongLeft } from "react-icons/hi2";

const Page = () => {
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
    <>
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
            {/* Cart Section */}
            <div className={styles["cart-container"]}>
              {/* Product List Section */}
              <div className={styles["cart-items"]}>
                {/* Headings Row */}
                <div className={`${styles["cart-row"]} ${styles["cart-headings"]}`}>
                  <div>Product</div>
                  <div>Price</div>
                  <div>Quantity</div>
                  <div>Sub Total</div>
                </div>
          
                {/* Product List */}
                <ul>
                  {items.map((product) => {
                    const imageUrl =
                      product.images?.length > 0
                        ? `${process.env.NEXT_PUBLIC_BASE_URL}/images/${product.images[0].url}`
                        : "/default-image.jpg"; // Fallback if no image
          
                    return (
                      <li key={product.id} className={styles["cart-row"]}>
                        {/* Product Name + Image */}
                        <div className={styles["P-details"]}>
                          <img src={imageUrl} alt={product.name} width={100} height={100} />
                          <div className={styles["P-details-down"]}>
                            <h2 className={styles["P-name"]}>{product.name}</h2>
                            <button
                              onClick={() => deleteCart(product.id)}
                              className={styles["remove-btn"]}
                            >
                              Remove
                            </button>
                          </div>
                        </div>
          
                        {/* Price */}
                        <div className={styles["P-price"]}>{formatPrice(product.price)}</div>
          
                        {/* Quantity Controls */}
                        <div>
                          <div className={styles["btns"]}>
                            <button onClick={() => removeOneFromCart(product.id)}>
                              <FaMinus />
                            </button>
                            <span>{product.quantity}</span>
                            <button onClick={() => addOneToCart(product, product.id)}>
                              <FaPlus />
                            </button>
                          </div>
                        </div>
          
                        {/* Total Price */}
                        <div>{formatPrice(product.price * product.quantity)}</div>
                      </li>
                    );
                  })}
                </ul>
              </div>
          
              {/* Order Summary (Only for PC) */}
              <div className={styles["order-summary"]}>
                <h3>Order Summary</h3>
                <p>Items in Cart: <strong>{items.reduce((total, item) => total + item.quantity, 0)}</strong></p>
                <p>Shipping Fee: <strong>{formatPrice(2500)}</strong></p> {/* Fixed fee */}
                <p>Total Price: <strong>{formatPrice(items.reduce((total, item) => total + item.price * item.quantity, 500))}</strong></p>
                <p className={styles["charges"]}>Including delivery charges</p>
                <button className={styles["checkout-btn"]}>Checkout</button>
              </div>
            </div>
          </>
          
          )}
        </div>
       <div className={styles["Go-back"]}><HiArrowLongLeft /> <Link href={"/"} style={{textDecoration:'none', color:'#ea1179' }} size={30}>Continue Shopping</Link></div>
      </div>
      <MobileCart />
    </>
  );
};

export default Page;
