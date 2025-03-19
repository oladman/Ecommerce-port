import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma"; // Ensure this import path is correct

export async function GET(req, { params }) {
  try {
    const id = params?.id; // ✅ No need to await params

    if (!id) {
      return NextResponse.json({ error: "User ID is required" }, { status: 400 });
    }

    const userDetails = await prisma.userDetails.findUnique({
      where: { userId: id },
    });

    if (!userDetails) {
      return NextResponse.json({ error: "User details not found" }, { status: 404 });
    }

    return NextResponse.json(userDetails, { status: 200 });
  } catch (error) {
    console.error("Error fetching user details:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
