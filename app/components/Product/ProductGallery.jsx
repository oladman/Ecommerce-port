import Image from "next/image";
import styles from "@/app/Products/[slug]/page.module.css";
import ProductActions from "./ProductActions";
import { getProductBySlug } from "@/lib/getProductBySlug";

export default async function ProductGallery({ slug }) {
  const product = await getProductBySlug(slug);
  const images = product?.images || [];

  return (
    <div className={styles["main-product-content-left"]}>
      {images.length > 0 ? (
        <div className={styles["images-container"]}>
          <div className={styles["scrollable-images"]}>
            {images.map((image, index) => (
              <Image
                key={index}
                className={styles["product-image"]}
                src={`${process.env.NEXT_PUBLIC_BASE_URL}/images/${image.url}`}
                alt={image.altText || "Product Image"}
                width={400}
                height={500}
                priority={index === 0}
              />
            ))}
          </div>
        </div>
      ) : (
        <p>No images available</p>
      )}

      <ProductActions />
    </div>
  );
}
