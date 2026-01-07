// app/api/products/route.js or pages/api/products.js

import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const globalForPrisma = globalThis;
const prisma = globalForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma;
}

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
