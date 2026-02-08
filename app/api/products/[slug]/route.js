import { prisma } from "@/lib/prisma";
export async function GET(req, context) {
  const { params } = await context; // ✅ await params
  const { slug } = params;

  try {
    const decodedSlug = decodeURIComponent(slug);

    const product = await prisma.product.findUnique({
      where: { slug: decodedSlug },
      include: {
        images: true,
        variants: true,
        category: true,
      },
    });

    if (!product) {
      return new Response(JSON.stringify({ error: "Product not found" }), { status: 404 });
    }

    return new Response(JSON.stringify(product), { status: 200 });
  } catch (error) {
    console.error("Error fetching product:", error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), { status: 500 });
  }
}
