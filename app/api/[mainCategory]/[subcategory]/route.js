import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import { SUBCATEGORY_MAP } from "@/utils/SubCategories";

export const runtime = "nodejs";

// Prisma singleton (safe for Next.js)
const globalForPrisma = globalThis;
const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({ log: ["error"] });

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}

export async function GET(request, { params }) {
  try {
    const { mainCategory, subcategory } = params;

    // 1️⃣ Validate main category and subcategory
    if (!SUBCATEGORY_MAP[mainCategory]) {
      return NextResponse.json(
        { message: "Invalid main category" },
        { status: 404 }
      );
    }

    const categoryPath = SUBCATEGORY_MAP[mainCategory][subcategory];
    if (!categoryPath) {
      return NextResponse.json(
        { message: "Invalid subcategory" },
        { status: 404 }
      );
    }

    // 2️⃣ Pagination
    const { searchParams } = new URL(request.url);
    const page = Number(searchParams.get("page")) || 1;
    const limit = Number(searchParams.get("limit")) || 12;
    const skip = (page - 1) * limit;

    // 3️⃣ Fetch subcategory IDs
    const subCategories = await prisma.category.findMany({
      where: { path: { startsWith: categoryPath } },
      select: { id: true },
    });

    if (subCategories.length === 0) {
      return NextResponse.json(
        { data: [], total: 0, page, limit },
        { status: 200 }
      );
    }

    const categoryIds = subCategories.map(c => c.id);

    // 4️⃣ Fetch products
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

    // 5️⃣ Return results
    return NextResponse.json({
      data: products,
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
    });
  } catch (err) {
    console.error(
      `Error fetching products for ${params.mainCategory}/${params.subcategory}:`,
      err
    );

    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
