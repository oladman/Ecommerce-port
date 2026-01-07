"use client";

import { useParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import SortFilterBar from "../../components/ProductsCategory/SortFilterBar";
import ProductGrid from "../../components/ProductsCategory/ProductGrid"; 
import styles from "./page.module.css";

export default function SubcategoryClientPage() {
  const params = useParams(); // get mainCategory/subcategory safely
  const { mainCategory, subcategory } = params;

  const [breadcrumb, setBreadcrumb] = useState(null);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [sortBy, setSortBy] = useState("popularity");

  // fetch breadcrumb and products
  useEffect(() => {
    async function fetchBreadcrumb() {
      try {
        const res = await fetch(`/api/breadcrumb/${mainCategory}/${subcategory}`);
        const json = await res.json();
        setBreadcrumb(json);
      } catch {
        setBreadcrumb(null);
      }
    }

    async function fetchProducts() {
      setLoading(true);
      try {
        const res = await fetch(`/api/${mainCategory}/${subcategory}`);
        const json = await res.json();
        setProducts(Array.isArray(json.data) ? json.data : []);
      } catch {
        setProducts([]);
      } finally {
        setLoading(false);
      }
    }

    fetchBreadcrumb();
    fetchProducts();
  }, [mainCategory, subcategory]);

  // 🟢 Sort products whenever sortBy changes
  const sortedProducts = useMemo(() => {
    const list = [...products];
    switch (sortBy) {
      case "newest":
        return list.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      case "priceLow":
        return list.sort((a, b) => a.price - b.price);
      case "priceHigh":
        return list.sort((a, b) => b.price - a.price);
      case "rating":
        return list.sort((a, b) => (b.rating || 0) - (a.rating || 0));
      default:
        return list; // popularity or default
    }
  }, [products, sortBy]);

  return (
    <div id="wrapper" className={styles["category-cover"]}>
      {breadcrumb && (
        <Breadcrumb
          category={breadcrumb.mainCategory}
          subcategory={breadcrumb.subcategory}
        />
      )}
      <h1 className={styles["title"]}>{breadcrumb?.subcategory?.name || subcategory}</h1>

      <SortFilterBar
        sortBy={sortBy}
        setSortBy={setSortBy}
        itemCount={products.length}
      />

      <ProductGrid products={sortedProducts} loading={loading} />
    </div>
  );
}
