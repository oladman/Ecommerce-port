import { prisma } from "@/lib/prisma";

export async function GET(req, { params }) {
  const { searchParams } = new URL(req.url);
  const page = Number(searchParams.get("page")) || 1;
  const limit = Number(searchParams.get("limit")) || 10;
  const skip = (page - 1) * limit;

  const product = await prisma.product.findUnique({
    where: { slug: params.slug },
    select: { id: true },
  });

  if (!product) {
    return Response.json({ error: "Product not found" }, { status: 404 });
  }

  const [comments, total] = await Promise.all([
    prisma.productComment.findMany({
      where: { productId: product.id },
      orderBy: { createdAt: "desc" },
      skip,
      take: limit,
    }),
    prisma.productComment.count({
      where: { productId: product.id },
    }),
  ]);

  return Response.json({
    comments,
    pagination: {
      total,
      page,
      pages: Math.ceil(total / limit),
    },
  });
}



export async function POST(req, { params }) {
  const { content, userId } = await req.json();

  if (!content) {
    return Response.json({ error: "Comment required" }, { status: 400 });
  }

  const product = await prisma.product.findUnique({
    where: { slug: params.slug },
    select: { id: true },
  });

  if (!product) {
    return Response.json({ error: "Product not found" }, { status: 404 });
  }

  const comment = await prisma.productComment.create({
    data: {
      content,
      userId,
      productId: product.id,
    },
  });

  return Response.json(comment, { status: 201 });
}
