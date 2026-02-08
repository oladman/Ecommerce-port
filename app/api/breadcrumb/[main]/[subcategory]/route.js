import { NextResponse } from "next/server";
import { SUBCATEGORY_MAP } from "@/utils/SubCategories";

export async function GET(request, { params }) {
  try {

    const { main, subcategory } = await params;

  
    const mainCategoryMap = SUBCATEGORY_MAP[main];

    if (!mainCategoryMap) {
      return NextResponse.json(
        { message: "Invalid main category" },
        { status: 404 }
      );
    }

    const categoryPath = mainCategoryMap[subcategory];

    if (!categoryPath) {
      return NextResponse.json(
        { message: "Invalid subcategory" },
        { status: 404 }
      );
    }

  
    const [mainName, subName] = categoryPath.split("/");

    return NextResponse.json({
      mainCategory: {
        name: mainName,
        slug: main,
      },
      subcategory: {
        name: subName,
        slug: subcategory,
        path: categoryPath,
      },
    });
  } catch (error) {
    console.error("Breadcrumb API error:", error);

    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
