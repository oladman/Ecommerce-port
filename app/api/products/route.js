// app/api/products/route.js or pages/api/products.js


import { prisma } from "@/lib/prisma";
import { NextResponse } from 'next/server';



export async function GET() {
  try {
    const products = await prisma.product.findMany({
      orderBy: {
        id: 'desc',
      },
      include: {
        images: true,
        variants: true,   // Include size/color info if defined
        category: true,   // Optional: show which category each product belongs to
      },
    });

    return NextResponse.json(products, { status: 200 });
  } catch (error) {
    console.error('Error fetching products:', error);
    return NextResponse.json(
      { message: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
