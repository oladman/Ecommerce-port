import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    // fetch all products with images and ratings
    const products = await prisma.product.findMany({
      include: {
        images: true,
        ratings: true,
      },
    });

    // calculate average rating
    const productsWithRating = products.map((product) => {
      const avgRating =
        product.ratings.length > 0
          ? product.ratings.reduce((sum, r) => sum + r.rating, 0) /
            product.ratings.length
          : 0;
      return { ...product, avgRating };
    });

    // sort products by avgRating descending (highest rated first)
    productsWithRating.sort((a, b) => b.avgRating - a.avgRating);

    // take top 10
    const topProducts = productsWithRating.slice(0, 10);

    return NextResponse.json(topProducts);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to fetch products" },
      { status: 500 }
    );
  }
}
