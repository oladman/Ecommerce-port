"use client"; // required if fetching from client-side

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
    <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
      {stars}
      {/* Numeric rating */}
      <span style={{ marginLeft: "6px" }}>({avgRating.toFixed(1)})</span>
      <span style={{ marginLeft: "4px", fontSize: "0.9em", color: "#666" }}>
        {total} rating{total !== 1 ? "s" : ""}
      </span>
    </div>
  );
}
