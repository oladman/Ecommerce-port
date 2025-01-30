import TrendingProducts from "./TrendingProducts";
import styles from "./Trending.module.css";

const Trending = () => {
  return (
    <div>
      <div className={styles["Top-deals"]}>
        <h3>New Trending</h3>

        <div id="wrapper" className={styles["Top-deal-cover"]}>
          
          <TrendingProducts />
        </div>
      </div>
    </div>
  );
};

export default Trending;
