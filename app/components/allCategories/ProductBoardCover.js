import Link from "next/link";
import ProductBoard from "./ProductBoard";
import styles from "./ProductBoardCover.module.css";
import { HiArrowLongRight } from "react-icons/hi2";

const ProductBoardCover = () => {
  return (
    <>
      <div className={styles["List-start"]}>
        <div className={styles["Category-body"]}>
          <div className={styles["Category-name"]}>Men</div>
          <Link href="/men" className={styles["Category-angle"]}>
            Show All <HiArrowLongRight style={{ color: "grey", marginLeft:"10px" }} />
          </Link>
        </div>
        <div className={styles["Cat-Scroll"]}>
          <ProductBoard category="men" limit={10} imagePath="/images/" />
        </div>
      </div>

      <div className={styles["List-start"]}>
        <div className={styles["Category-body"]}>
          <div className={styles["Category-name"]}>Women</div>
          <Link href="/Women" className={styles["Category-angle"]}>
            Show All <HiArrowLongRight style={{ color: "grey", marginLeft:"10px" }} />
          </Link>
        </div>
        <div className={styles["Cat-Scroll"]}>
          <ProductBoard category="women" limit={10} imagePath="/images/" />
        </div>
      </div>

      <div className={styles["List-start"]}>
        <div className={styles["Category-body"]}>
          <div className={styles["Category-name"]}>Kid</div>
          <Link href="/kid" className={styles["Category-angle"]}>
            Show All <HiArrowLongRight style={{ color: "grey", marginLeft:"10px" }} />
          </Link>
        </div>
        <div className={styles["Cat-Scroll"]}>
          <ProductBoard category="kid" limit={10} imagePath="/images/" />
        </div>
      </div>

      <div className={styles["List-start"]}>
        <div className={styles["Category-body"]}>
          <div className={styles["Category-name"]}>Belt</div>
          <Link href="/belt" className={styles["Category-angle"]}>
            Show All <HiArrowLongRight style={{ color: "grey", marginLeft:"10px" }} />
          </Link>
        </div>
        <div className={styles["Cat-Scroll"]}>
          <ProductBoard category="belt" limit={10} imagePath="/images/" />
        </div>
      </div>
    </>
  );
};

export default ProductBoardCover;
