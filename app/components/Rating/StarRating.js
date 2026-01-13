"use client"; // required if fetching from client-side
import styles from "./StarRating.module.css"
import React, { useEffect, useState } from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

export default function StarRating({ slug }) {
  const [ratingData, setRatingData] = useState({
    avgRating: 0,
    total: 0,
    ratings: [],
  });

  useEffect(() => {
    async function fetchRating() {
      try {
        const res = await fetch(`/api/products/${slug}/ratings`, { cache: "no-store" });
        if (res.ok) {
          const data = await res.json();
          setRatingData(data);
        }
      } catch (err) {
        console.error("Error fetching ratings:", err);
      }
    }

    fetchRating();
  }, [slug]);

  const { avgRating, total } = ratingData;

  const maxStars = 5;

  // Create stars array based on thresholds
  const stars = Array.from({ length: maxStars }).map((_, i) => {
    const starValue = i + 1;

    if (avgRating >= starValue) {
      // Full star
      return <FaStar key={i} color="#FFD700" />;
    } else if (avgRating >= starValue - 0.5) {
      // Half star
      return <FaStarHalfAlt key={i} color="#FFD700" />;
    } else {
      // Empty star
      return <FaRegStar key={i} color="#FFD700" />;
    }
  });

  return (
<div className={styles["rating"]} >
  {stars}
  <span className={styles["ratingValue"]} >{avgRating.toFixed(1)}</span>
  <span className={styles["ratingCount"]}>
    ({total} reviews)
  </span>
</div>


    
  );
}
