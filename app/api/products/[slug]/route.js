import prisma from "@/lib/prisma";

export async function GET(req, { params }) {
  const { slug } = params;

  try {
    // Decode the slug from the URL
    const decodedSlug = decodeURIComponent(slug);

    // Fetch product by slug, including related images
    const product = await prisma.products.findFirst({
      where: { slug: decodedSlug }, // Ensure the slug matches exactly
      include: {
        images: true, // Fetch linked images
      },
    });

    // If no product is found, return 404
    if (!product) {
      return new Response(
        JSON.stringify({ error: "Product not found" }),
        {
          status: 404,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    // Return the product details with images
    return new Response(
      JSON.stringify(product),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error fetching product:", error);

    // Return an internal server error response
    return new Response(
      JSON.stringify({ error: "Internal Server Error" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
