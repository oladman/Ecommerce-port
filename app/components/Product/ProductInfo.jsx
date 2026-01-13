import styles from "@/app/Products/[slug]/page.module.css";
import StarRating from "@/app/components/Rating/StarRating";
import CartButton from "@/app/components/Buttons/CartButton";
import ProductVariants from "./ProductVariants";
import ProductPrice from "./ProductPrice";
import { getProductBySlug } from "@/lib/getProductBySlug";

export default async function ProductInfo({ slug }) {
  const product = await getProductBySlug(slug);

  return (
    <section className={styles["productInfo"]}>
      <h1  className={styles["productTitle"]}>{product.name}</h1>

      <div className={styles["ratingRow"]} >
        <StarRating slug={slug} />
      </div>

      <ProductPrice price={product.price} />

      <ProductVariants variants={product.variants} />

      <div className={styles["cartSection"]}>
        <CartButton product={product} name="Add to Cart" styleType="primary" />
      </div>
    </section>
  );
}
