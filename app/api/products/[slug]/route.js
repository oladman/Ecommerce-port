import { prisma } from "@/lib/prisma";

export async function GET(req, { params }) {
  const { slug } = params;

  try {
    // Decode the slug from the URL
    const decodedSlug = decodeURIComponent(slug);

    // Fetch product by slug, including related images
    const product = await prisma.product.findUnique({
      where: { slug: decodedSlug },
      include: { images: true },
    });

    // If no product is found, return 404
    if (!product) {
      return Response.json({ error: "Product not found" }, { status: 404 });
    }

    // Return the product details with images
    return Response.json(product, { status: 200 });
  } catch (error) {
    console.error("Error fetching product:", error);

    // Return an internal server error response
    return Response.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
