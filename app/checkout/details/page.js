"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import InputField from "@/app/components/auth/InputField";
import styles from "./page.module.css";
import NormalButton from "@/app/components/Buttons/Normal-Button";

const CheckoutDetails = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  // Initial empty form
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    additionalPhone: "",
    deliveryAddress: "",
    city: "",
    state: "",
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUserDetails = async () => {
      if (status === "loading") return; // Wait until session loads

      if (!session?.user?.id) {
        router.push("/login");
        return;
      }

      try {
        console.log("Fetching user details...");
        const response = await fetch(`/api/user/details/${session.user.id}`);

        if (!response.ok) {
          console.warn("User details not found, using empty form.");
          throw new Error("No user details found");
        }

        const data = await response.json();
        console.log("User details fetched:", data);

        // Update form with fetched data OR keep it empty
        setFormData({
          firstName: data?.firstName || "",
          lastName: data?.lastName || "",
          phoneNumber: data?.phoneNumber || "",
          additionalPhone: data?.additionalPhone || "",
          deliveryAddress: data?.deliveryAddress || "",
          city: data?.city || "",
          state: data?.state || "",
        });

      } catch (error) {
        console.error("Error fetching user details:", error);
        setError("Failed to load user details. Please enter them manually.");
      } finally {
        setLoading(false); // Ensure form appears
      }
    };

    fetchUserDetails();
  }, [session?.user?.id, status, router]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/user/update", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId: session?.user?.id,
          ...formData,
        }),
      });

      if (!response.ok) {
        throw new Error("Error saving details. Try again.");
      }

      router.push("/checkout");
    } catch (error) {
      alert(error.message);
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div className={styles["Details-page"]}>
      <h1>Enter Your  Shipping Address</h1>
      {error && <p className={styles.error}>{error}</p>}  {/* Show error but keep form */}
      <form onSubmit={handleSubmit}>
        <InputField
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
          className={styles["input-style"]}
        />
        <InputField
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
          className={styles["input-style"]}
        />
        <InputField
          type="tel"
          name="phoneNumber"
          placeholder="Phone Number"
          value={formData.phoneNumber}
          onChange={handleChange}
          className={styles["input-style"]}
        />
        <InputField
          type="tel"
          name="additionalPhone"
          placeholder="Additional Phone"
          value={formData.additionalPhone}
          onChange={handleChange}
          className={styles["input-style"]}
        />
        <InputField
          type="text"
          name="deliveryAddress"
          placeholder="Delivery Address"
          value={formData.deliveryAddress}
          onChange={handleChange}
          className={styles["input-style"]}
        />
        <InputField
          type="text"
          name="city"
          placeholder="City"
          value={formData.city}
          onChange={handleChange}
          className={styles["input-style"]}
        />
        <InputField
          type="text"
          name="state"
          placeholder="State"
          value={formData.state}
          onChange={handleChange}
          className={styles["input-style"]}
        />

        <NormalButton type="submit" name="submit" className={styles["btn"]}>
          Save & Continue
        </NormalButton>
      </form>
    </div>
  );
};

export default CheckoutDetails;
