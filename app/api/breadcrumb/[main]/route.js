import { NextResponse } from "next/server";
import { MAIN_CATEGORY_CONFIG } from "@/utils/MainCategoryConfig";

export async function GET(request, { params }) {
  try {
    const { main } = await params;

    const config = MAIN_CATEGORY_CONFIG[main];

    if (!config) {
      return NextResponse.json(
        { message: "Invalid main category" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      mainCategory: {
        name: config.title, // 👈 REQUIRED
        slug: main,         // 👈 REQUIRED
      },
    });
  } catch (error) {
    console.error("Main breadcrumb API error:", error);

    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
