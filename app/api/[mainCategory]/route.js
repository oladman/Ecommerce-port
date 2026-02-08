import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { MAIN_CATEGORY_CONFIG } from "@/utils/MainCategoryConfig";

export const runtime = "nodejs";

export async function GET(request, { params }) {
  try {
    const { mainCategory } = params;

    const config = MAIN_CATEGORY_CONFIG[mainCategory];
    if (!config) {
      return NextResponse.json(
        { message: "Invalid main category" },
        { status: 404 }
      );
    }

    const { searchParams } = new URL(request.url);
    const page = Number(searchParams.get("page")) || 1;
    const limit = Math.min(Number(searchParams.get("limit")) || 12, 50);
    const skip = (page - 1) * limit;

    const subCategories = await prisma.category.findMany({
      where: {
        path: { startsWith: config.pathPrefix },
      },
      select: { id: true },
    });

    if (!subCategories.length) {
      return NextResponse.json(
        { data: [], total: 0, page, limit },
        { status: 200 }
      );
    }

    const categoryIds = subCategories.map((c) => c.id);

    const [products, total] = await prisma.$transaction([
      prisma.product.findMany({
        where: { categoryId: { in: categoryIds } },
        include: { images: true, category: true },
        orderBy: { createdAt: "desc" },
        skip,
        take: limit,
      }),
      prisma.product.count({
        where: { categoryId: { in: categoryIds } },
      }),
    ]);

    return NextResponse.json({
      data: products,
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
    });
  } catch (err) {
    console.error("Error fetching main category products:", err);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
