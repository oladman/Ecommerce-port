import { Suspense } from "react";
import TrendingProducts from "./TrendingProducts";
import styles from "./Trending.module.css";
import TrendingProductsWrapper from "./TrendingProductsWrapper";

const Trending = () => {
  return (
    <>
      <div className={styles["Top-deals"]}>
        <h3>Featured Trending</h3>
        <TrendingProductsWrapper />
      </div>
    </>
  );
};

export default Trending;
