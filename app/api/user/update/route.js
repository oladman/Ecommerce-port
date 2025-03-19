import { db } from "@/lib/db";

export async function POST(req) {
  try {
    const { 
      userId, 
      firstName, 
      lastName, 
      phoneNumber, 
      additionalPhone, 
      deliveryAddress, 
      city, 
      state 
    } = await req.json();

    // Ensure required fields are provided
    if (!userId || !firstName || !lastName || !phoneNumber || !deliveryAddress || !city || !state) {
      return Response.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Check if user details already exist
    const existingDetails = await db.userDetails.findUnique({
      where: { userId },
    });

    if (existingDetails) {
      // Update existing user details
      await db.userDetails.update({
        where: { userId },
        data: { firstName, lastName, phoneNumber, additionalPhone, deliveryAddress, city, state },
      });
    } else {
      // Create new user details
      await db.userDetails.create({
        data: {
          userId,
          firstName,
          lastName,
          phoneNumber,
          additionalPhone,
          deliveryAddress,
          city,
          state,
        },
      });
    }

    return Response.json({ success: true });
  } catch (error) {
    console.error("Error updating user details:", error);
    return Response.json({ error: "Failed to update user details" }, { status: 500 });
  }
}
