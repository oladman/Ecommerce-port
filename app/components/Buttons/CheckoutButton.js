"use client"; // ✅ Mark this as a client component

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";


const CheckoutButton = ({ children, className }) => {
  const { data: session } = useSession(); // Get logged-in user session
  const router = useRouter();

  const handleCheckout = () => {
    if (!session) {
      // 🚀 User not logged in, redirect to login page
      router.push("/login");
    } else {
      // ✅ User logged in, go to checkout page
      router.push("/checkout");
    }
  };

  return (
    <button onClick={handleCheckout} className={className}>
      {children || "Proceed to Checkout"}
    </button>
  );
};

export default CheckoutButton;
