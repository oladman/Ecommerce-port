export const getTrendingProducts = async () => {
  try {
    const baseUrl =
      process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

    const res = await fetch(`${baseUrl}/api/products`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error(
        `Failed to fetch Trending Products. Status: ${res.status}`
      );
    }

    const products = await res.json();
    return products.slice(0, 8);
  } catch (error) {
    console.error("Error fetching Trending Products:", error);
    return null;
  }
};
