import CartItem from "./CartItem";
import styles from "./page.module.css";

const CartItemList = ({
  items,
  addOneToCart,
  removeOneFromCart,
  deleteCart,
}) => {
  return (
    <div className={styles["cart-items"]}>
      <div className={`${styles["cart-row"]} ${styles["cart-headings"]}`}>
        <div>Product</div>
        <div>Price</div>
        <div>Quantity</div>
        <div>Sub Total</div>
      </div>

      <ul>
        {items.map((product) => (
          <CartItem
            key={product.id}
            product={product}
            addOneToCart={addOneToCart}
            removeOneFromCart={removeOneFromCart}
            deleteCart={deleteCart}
          />
        ))}
      </ul>
    </div>
  );
};

export default CartItemList;
