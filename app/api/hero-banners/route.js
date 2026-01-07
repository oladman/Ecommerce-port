import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = global.prisma || new PrismaClient();
if (process.env.NODE_ENV !== "production") global.prisma = prisma;

export async function GET(req) {
  try {
    const banners = await prisma.heroBanner.findMany({
      orderBy: { order: "asc" },
    });

    return NextResponse.json(banners);
  } catch (error) {
    console.error("Error fetching hero banners:", error);
    return NextResponse.json({ message: "Error fetching hero banners" }, { status: 500 });
  }
}
