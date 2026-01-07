import { prisma } from "@/lib/prisma";

export async function GET(req, { params }) {
  const slug = params.slug; // ✅ access directly, do NOT await

  const product = await prisma.product.findUnique({
    where: { slug },
    select: {
      ratings: {
        select: {
          id: true,
          rating: true,
          userId: true,
          createdAt: true,
        },
      },
    },
  });

  if (!product) {
    return new Response(JSON.stringify({ error: "Product not found" }), { status: 404 });
  }

  const avgRating =
    product.ratings.length > 0
      ? product.ratings.reduce((a, b) => a + b.rating, 0) / product.ratings.length
      : 0;

  return new Response(
    JSON.stringify({
      ratings: product.ratings,
      avgRating,
      total: product.ratings.length,
    }),
    { status: 200 }
  );
}

export async function POST(req, { params }) {
  const slug = params.slug;

  const { rating, userId } = await req.json();

  if (!rating || rating < 1 || rating > 5) {
    return new Response(JSON.stringify({ error: "Invalid rating" }), { status: 400 });
  }

  const product = await prisma.product.findUnique({
    where: { slug },
    select: { id: true },
  });

  if (!product) {
    return new Response(JSON.stringify({ error: "Product not found" }), { status: 404 });
  }

  const savedRating = await prisma.productRating.upsert({
    where: {
      productId_userId: {
        productId: product.id,
        userId,
      },
    },
    update: { rating },
    create: {
      rating,
      userId,
      productId: product.id,
    },
  });

  return new Response(JSON.stringify(savedRating), { status: 201 });
}
