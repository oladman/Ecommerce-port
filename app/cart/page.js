"use client";

import styles from "./page.module.css";
import { useContext } from "react";
import { CartContext } from "../context/ProductContext";
import Link from "next/link";
import { HiArrowLongLeft } from "react-icons/hi2";

import MobileCart from "../components/MobileCart/MobileCart";
import CartBreadcrumb from "./CartBreadcrumb";
import CartEmpty from "./CartEmpty";
import CartItemList from "./CartItemList";
import OrderSummary from "./OrderSummary";

const Page = () => {
  const {
    items,
    addOneToCart,
    removeOneFromCart,
    deleteCart,
  } = useContext(CartContext);

  return (
    <>
      <div id="wrapper">
        <div className={styles.cart}>
          <CartBreadcrumb />
          <h1>Shopping Cart</h1>

          {items.length === 0 ? (
            <CartEmpty />
          ) : (
            <div className={styles["cart-container"]}>
              <CartItemList
                items={items}
                addOneToCart={addOneToCart}
                removeOneFromCart={removeOneFromCart}
                deleteCart={deleteCart}
              />
              <OrderSummary items={items} />
            </div>
          )}
        </div>

        <div className={styles["Go-back"]}>
          <HiArrowLongLeft />
          <Link href="/" style={{ textDecoration: "none", color: "#246854" }}>
            Continue Shopping
          </Link>
        </div>
      </div>

      <MobileCart />
    </>
  );
};

export default Page;
