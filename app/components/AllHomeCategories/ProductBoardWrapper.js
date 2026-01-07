"use client";

import { useEffect, useState } from "react";
import ProductBoardUI from "./ProductBoardUI";
import CategoryBoardSkeleton from "./CategoryBoardSkeleton";

export default function ProductBoardWrapper({ apiRoute, limit }) {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    fetch(`/api/${apiRoute}`)
      .then((res) => res.json())
      .then((json) => {
        setProducts(Array.isArray(json.data) ? json.data.slice(0, limit) : []);
      })
      .catch(() => setProducts([]));
  }, [apiRoute, limit]);

  if (!products) return <CategoryBoardSkeleton count={limit} />;

  return <ProductBoardUI products={products} />;
}
