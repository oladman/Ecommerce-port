"use client"; // ✅ Ensure it's a client component

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import styles from "./page.module.css";
import { GiMorgueFeet } from "react-icons/gi";
import { BiArrowBack } from "react-icons/bi";
import NormalButton from "../components/Buttons/Normal-Button";
import { GoAlertFill } from "react-icons/go";
import CheckOutItem from "../components/checkout/Checkout-items";
import { useContext } from "react";
import { CartContext } from "../context/ProductContext";
import { HiLockClosed } from "react-icons/hi2";


const CheckoutPage = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [userDetails, setUserDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedPayment, setSelectedPayment] = useState(null);
  const [tempPayment, setTempPayment] = useState(null); // Temporary selection before confirmation
  const [showPaymentOptions, setShowPaymentOptions] = useState(false);

  const {
    items,
    addOneToCart,
    removeOneFromCart,
    deleteCart,
    getProductQuantity,
  } = useContext(CartContext); // ✅ Move useContext to the top level

  useEffect(() => {
    const fetchUserDetails = async () => {
      if (!session) {
        router.push("/login");
        return;
      }

      try {
        const res = await fetch(`/api/user/details/${session.user.id}`);
        if (!res.ok) throw new Error("Failed to fetch user details");

        const data = await res.json();
        setUserDetails(data);
      } catch (error) {
        console.error("Error fetching user details:", error);
      } finally {
        setLoading(false);
      }
    };

    if (status === "authenticated") {
      fetchUserDetails();
    } else if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [session, status, router]);

  if (loading) return <p>Loading...</p>;

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



  const handleConfirmPayment = () => {
    setSelectedPayment(tempPayment); // Update selected payment method
    setShowPaymentOptions(false); // Close the selection dropdown
  };

  const paymentMethods = [
    {
      id: "paypal",
      name: "PayPal",
      description: "Fast and secure payment with PayPal",
    },
    {
      id: "stripe",
      name: "Credit/Debit Card (Stripe)",
      description: "Use your card for a secure transaction",
    },
    {
      id: "bank",
      name: "Bank Transfer",
      description: "Transfer directly from your bank account",
    },
    {
      id: "opay",
      name: "Opay",
      description: "Quick payments with Opay wallet",
    },
    {
      id: "palmpay",
      name: "Palmpay",
      description: "Enjoy seamless payments with Palmpay",
    },
  ];

  return (
    <div id="wrapper">
      <nav className={styles["header-desktop"]}>
        <div className={styles["logo-text"]}>
          <Link href="/" className={styles["link-go-optical"]} style={{ textDecoration: "none", color: "#000", fontWeight: "600" }}>
            <p>
              YEFFSO
              <span className={styles["logo-icon"]}>
                <GiMorgueFeet  />
              </span>
            </p>
          </Link>
        </div>
        <HiLockClosed size={20} color="grey"/>
        <p>CHECKOUT</p>

      </nav>
   
      <div className={styles["checkout-cover"]}>
        <div className={styles["checkout"]}>
          {userDetails?.deliveryAddress && userDetails?.phoneNumber ? (
            <>
              <div className={styles["Checkout-card"]}>
                <div className={styles["cardTop"]}>
                  <div>
                    <p>STEP 1. SHIPPING ADDRESS</p>
                  </div>

                  <Link
                    className={styles["cardTop-link"]}
                    href={`/checkout/details`}
                  >
                    Change
                  </Link>
                </div>

                <div className={styles["Checkout-left-bottom"]}>
                  <div style={{ fontSize: "15px" }}>
                    {!loading && (
                      <div>
                      
                        <span>{userDetails?.firstName} </span>
                        <span>{userDetails?.lastName} </span> 
                      </div>
                    )}
                  </div>
                  <div className={styles["details"]}>
                    {!loading && (
                      <div>
                        <p>{userDetails?.deliveryAddress},</p>
                        <p>{userDetails?.city},</p>
                        <p>{userDetails?.state},</p>
                        <p>
                          {userDetails?.phoneNumber},
                          {userDetails?.additionalPhone}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div className={styles["warning-box"]}>
              <div>
                <GoAlertFill size={20} style={{ color: "#FFE066" }} />
                <p>You haven&apos;t added your shipping details yet.</p>
              </div>

              <Link
                href="/checkout/details"
                className={styles["warning-box-link"]}
              >
                Click here to update your shipping details
              </Link>
            </div>
          )}
          <div className={styles["Checkout-body"]}>
          <div>
                <div className={styles["cardTop"]}>
                  <div>
                    <p>STEP 2. PAYMENT METHOD</p>
                  </div>
                  <Link
                    href="#"
                    className={styles["cardTop-link"]}
                    style={{ MarginTop: "20px" }}
                    onClick={() => setShowPaymentOptions(true)}
                  >
                    Change
                  </Link>
                </div>

                {!showPaymentOptions ? (
                  <Link
                    href="#"
                    className={styles["select-payment-link"]}
                    onClick={() => setShowPaymentOptions(true)}
                  ></Link>
                ) : (
                  <div className={styles["payment-methods"]}>
                    {paymentMethods.map((method) => (
                      <div
                        key={method.id}
                        className={`${styles["payment-option"]} ${
                          tempPayment?.id === method.id
                            ? styles["selected"]
                            : ""
                        }`}
                        onClick={() => setTempPayment(method)}
                      >
                        <input
                          type="radio"
                          name="paymentMethod"
                          checked={tempPayment?.id === method.id}
                          readOnly
                        />
                        <div>
                          <label>{method.name}</label>
                          <p className={styles["payment-description"]}>
                            {method.description}
                          </p>
                        </div>
                      </div>
                    ))}
                    {/* Confirm Button */}
                    <button
                      className={styles["confirm-button"]}
                      onClick={handleConfirmPayment}
                      disabled={!tempPayment} // Disable if no method is selected
                    >
                      Confirm Payment Method
                    </button>
                  </div>
                )}

                {/* Show Selected Payment Method */}

                {selectedPayment && (
                  <div className={styles["payment-summary"]}>
                    <p>
                      <strong>{selectedPayment.name}</strong>
                    </p>
                    <p className={styles["payment-description"]}>
                      {selectedPayment.description}
                    </p>
                  </div>
                )}
              </div>

            <div className={styles["style-bend"]}>
              <div className={styles["cardTop"]}>
                <div>
                  <p>STEP 3. REVIEW ITEMS</p>
                </div>
              </div>

              <div className={styles["Checkout-left-bottom"]}>
                <div className={styles["review-item"]}>
                  <p>
                    Delivery between
                    <strong className={styles["span-check"]}>
                      (3 - 7 Business days Estimated)
                    </strong>
                  </p>

                  <Link className={styles["review-item-link"]} href="/cart">
                    Edit Cart
                  </Link>
                </div>
                <div>
                  {/*<Checkoutitems /> */}
                  <CheckOutItem />
                </div>
              </div>

            </div>
          </div>
        </div>

        
        <div className={styles["order-summary"]}>
          <h3>Order Summary</h3>
          <div className={styles["order-summary-item"]}>
            <p>Items:</p>
            <strong>
              {items.reduce((total, item) => total + item.quantity, 0)}
            </strong>
          </div>

          <div className={styles["order-summary-item"]}>
            <p>Shipping Fee:</p> <strong>{formatPrice(2500)}</strong>
          </div>

          <div className={styles["order-summary-item-total"]}>
            <p>Total: </p>
            <strong>
              {formatPrice(
                items.reduce(
                  (total, item) => total + item.price * item.quantity,
                  500
                )
              )}
            </strong>
          </div>

          <div className={styles["info"]}>
            <p>
              You will be redirected to our secure checkout page to complete
              this transaction
            </p>
            <p>
              By proceeding, you are automatically accepting the{" "}
              <Link href={"/"} style={{ color: "#246854" }}>
                Terms & Conditions
              </Link>
            </p>
          </div>
          <NormalButton
            onClick={() => router.push("/checkout/payment")}
            disabled={
              !userDetails?.deliveryAddress || !userDetails?.phoneNumber
            } // Disable if details are missing
            className={
              !userDetails?.deliveryAddress || !userDetails?.phoneNumber
                ? styles["checkout-btn"]
                : styles["checkout-btn"]
            }
          >
            Proceed to Payment
          </NormalButton>
        </div>
      </div>
      <Link
        href="/cart"
        className={styles["Go-back"]}
        style={{ textDecoration: "none", color: "#246854" }}
      >
        <BiArrowBack style={{ fontSize: "12px" }} /> Go back
      </Link>
    </div>
  );
};

export default CheckoutPage;
