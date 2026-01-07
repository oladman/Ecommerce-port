import styles from "@/app/Products/[slug]/page.module.css";
import { TbTruckReturn } from "react-icons/tb";
import Link from "next/link";
import { FaCcVisa, FaCcPaypal } from "react-icons/fa";
import { FaCcMastercard } from "react-icons/fa6";

export default function ProductPolicies({ returnDays }) {
  return (
    <>
      <div className={styles["return"]}>
        <div>
          <div className={styles["icon-return"]}>
            <TbTruckReturn size={20} />
            <p>Return</p>
          </div>
          <p className={styles["caution"]}>
            You have <span>{returnDays} days</span> to return the item(s).
          </p>
        </div>
        <ul className={styles["caution-list"]}>
          <li>Free store return</li>
          <li>Free returns via USPS Dropoff Service</li>
        </ul>
      </div>

      <div className={styles["Delivery-info"]}>
        <Link className={styles["info-link"]} href="/">
          Delivery Terms & Condition
        </Link>
        <div className={styles["Accepted-pay"]}>
          <p>Secure your payment guarantee.</p>
          <div className={styles["payment-lists"]}>
            <FaCcVisa size={30} />
            <FaCcMastercard size={30} />
            <FaCcPaypal size={30} />
          </div>
        </div>
      </div>
    </>
  );
}
