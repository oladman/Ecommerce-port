import styles from "./page.module.css";
import CheckoutButton from "../components/Buttons/CheckoutButton";
import {formatPrice} from "../../utils/formatPrice";

const OrderSummary = ({ items }) => {
  const totalItems = items.reduce((t, i) => t + i.quantity, 0);
  const shippingFee = 105;
  const totalPrice = items.reduce(
    (t, i) => t + i.price * i.quantity,
    shippingFee
  );

  return (
    <div className={styles["order-summary"]}>
      <h3>Order Summary</h3>

      <div>
        <p>Items in Cart:</p>
        <span className={styles["strong-style"]}>{totalItems}</span>
      </div>

      <div>
        <p>Shipping Fee:</p>
        <span className={styles["strong-style"]}>
          {formatPrice(shippingFee)}
        </span>
      </div>

      <div>
        <p>Total Price:</p>
        <span className={styles["strong-style"]}>
          {formatPrice(totalPrice)}
        </span>
      </div>

      <p className={styles["charges"]}>Including delivery charges</p>

      <CheckoutButton className={styles["checkout-btn"]} />
    </div>
  );
};

export default OrderSummary;
