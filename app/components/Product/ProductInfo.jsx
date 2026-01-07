import styles from "@/app/Products/[slug]/page.module.css";
import StarRating from "@/app/components/Rating/StarRating";
import CartButton from "@/app/components/Buttons/CartButton";
import ProductVariants from "./ProductVariants";
import ProductPrice from "./ProductPrice";
import { getProductBySlug } from "@/lib/getProductBySlug";

export default async function ProductInfo({ slug }) {
  const product = await getProductBySlug(slug);

  return (
    <div className={styles["main-product-content-right"]}>
      <h1 className={styles["Pname"]}>{product.name}</h1>

      <StarRating slug={slug} />

      <ProductPrice price={product.price} />

      <hr className={styles["divider"]} />

      <ProductVariants variants={product.variants} />

      <div className={styles["Buttons"]}>
        <CartButton
          product={product}
          name=" Add to Cart"
          styleType="btn-one"
        />
      </div>
    </div>
  );
}
