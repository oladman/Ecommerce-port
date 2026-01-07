import { prisma } from "@/lib/prisma"; // or your DB client

export async function getRelatedProducts(category, currentSlug, limit = 4) {
  return await prisma.product.findMany({
    where: {
      category: category,
      slug: {
        not: currentSlug,
      },
    },
    take: limit,
    include: {
      images: true,
    },
  });
}
