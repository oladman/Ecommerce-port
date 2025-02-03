import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = global.prisma || new PrismaClient();
if (process.env.NODE_ENV !== "production") global.prisma = prisma;

export async function GET() {
  try {
    const products = await prisma.products.findMany({
      where: {
        Type: "belt",  // Add this line to filter products by Type "men"
      },
      orderBy: {
        id: "desc",
      },
    });
    return NextResponse.json(products, { status: 200 });
  } catch (error) {
    console.error("Error Fetching Products:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
