import styles from "./page.module.css";
import { getProductBySlug } from "@/lib/getProductBySlug";
import { getRelatedProducts } from "@/lib/getRelatedProducts";
import Breadcrumb from "@/app/components/Breadcrumb/Breadcrumb";
import ProductGallery from "@/app/components/Product/ProductGallery";
import ProductInfo from "@/app/components/Product/ProductInfo";
import ProductTabs from "./ProductTabs";
import ProductPolicies from "@/app/components/Product/ProductPolicies";
import RelatedProducts from "@/app/components/Product/RelatedProducts";
import { formatPrice } from "@/utils/formatPrice";

export default async function ProductPageContent({ slug, searchParams }) {
  const product = await getProductBySlug(slug);
  const relatedProducts = await getRelatedProducts(
    product.category,
    product.slug
  );

  return (
    <>
      <div className={styles["pattern-page"]}>
        <Breadcrumb
          category={product.category}
          productName={product.name}
          productSlug={product.slug}
        />

        <div className={styles["Main-product-content"]}>
          <ProductGallery slug={slug} />
          <ProductInfo slug={slug} />
        </div>

        <ProductTabs
          searchParams={searchParams}
          description={product.description}
          slug={slug}
        />
      </div>

      <ProductPolicies returnDays={product.returnDays} />

      <RelatedProducts
        products={relatedProducts}
        formatPrice={formatPrice}
      />
    </>
  );
}
