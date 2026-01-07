"use client";

import { useParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import Breadcrumb from "../components/Breadcrumb/Breadcrumb";
import PageHeader from "../components/ProductsCategory/PageHeader";
import SortFilterBar from "../components/ProductsCategory/SortFilterBar";
import ProductGrid from "../components/ProductsCategory/ProductGrid";
import { MAIN_CATEGORY_CONFIG } from "@/utils/MainCategoryConfig";
import styles from "./page.module.css";

export default function MainCategoryPage() {
  const { mainCategory } = useParams();
  const config = MAIN_CATEGORY_CONFIG[mainCategory];

  const [breadcrumb, setBreadcrumb] = useState(null);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [sortBy, setSortBy] = useState("popularity");

  useEffect(() => {
    if (!config) return;

    async function fetchBreadcrumb() {
      try {
        const res = await fetch(`/api/breadcrumb/${mainCategory}`);
        const json = await res.json();
        setBreadcrumb(json);
      } catch {
        setBreadcrumb(null);
      }
    }

    async function fetchProducts() {
      setLoading(true);
      try {
        const res = await fetch(`/api/${mainCategory}`);
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
  }, [mainCategory, config]);

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
        return list;
    }
  }, [products, sortBy]);

  if (!config) {
    return <h1>Category not found</h1>;
  }

  return (
    <div id="wrapper" className={styles["main-category-page"]}>
      {/* ✅ Breadcrumb now works */}
      {breadcrumb?.mainCategory && (
        <Breadcrumb category={breadcrumb.mainCategory} />
      )}
      <PageHeader title={config.title} categories={config.categories} />
      <SortFilterBar
        sortBy={sortBy}
        setSortBy={setSortBy}
        itemCount={sortedProducts.length}
      />
      <ProductGrid products={sortedProducts} loading={loading} />
    </div>
  );
}
