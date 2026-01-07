import { getTrendingProducts } from "@/lib/getTrendingProducts";

export async function GET() {
  const products = await getTrendingProducts();
  return new Response(JSON.stringify(products), { status: 200 });
}
