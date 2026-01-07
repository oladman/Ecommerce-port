import { notFound } from "next/navigation";

export async function getProductBySlug(slug) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/products/${encodeURIComponent(slug)}`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch product");
  }

  const product = await res.json();

  if (!product || product.error) {
    notFound();
  }

  return product;
}
