import styles from "./page.module.css";
import { Suspense } from "react";
import ProductPageContent from "./ProductPageContent";
import {
  ProductGallerySkeleton,
  ProductInfoSkeleton,
  ProductTabsSkeleton,
  RelatedProductsSkeleton,
} from "@/app/components/Skeleton";

export default function Page({ params, searchParams }) {
  const { slug } = params;

  return (
    <div id="wrapper">
      <Suspense
        fallback={
          <>
            <ProductGallerySkeleton />
            <ProductInfoSkeleton />
            <ProductTabsSkeleton />
            <RelatedProductsSkeleton />
          </>
        }
      >
        <ProductPageContent slug={slug} searchParams={searchParams} />
      </Suspense>
    </div>
  );
}
