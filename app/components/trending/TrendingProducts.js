import Link from "next/link";
import styles from "./TrendingProducts.module.css";
import NormalButton from "../Buttons/Normal-Button";

const getTrendingProducts = async () => {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
    const res = await fetch(`${baseUrl}/api/products`, {
      cache: "no-store", // Ensures fresh data is fetched
    });

    if (!res.ok) {
      throw new Error(
        `Failed to fetch Trending Products. Status: ${res.status}`
      );
    }

    const products = await res.json();
    return products.slice(0, 8); // Limit the results to the first 8 products
  } catch (error) {
    console.error("Error fetching Trending Products:", error);
    return null; // Handle errors gracefully
  }
};

const TrendingProducts = async () => {
 
  const trendingProducts = await getTrendingProducts();
  

  // Handling the case when data is not fetched properly
  if (!trendingProducts) {
    return <p>Error fetching trending products. Please try again later.</p>;
  }


  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      minimumFractionDigits: 2,
    })
      .format(price)
      .replace("NGN", "₦") // Ensures proper Naira symbol placement
      .trim();
  };

  return (
    <>
      {trendingProducts.length > 0 ? (
        trendingProducts.map((product) => (
          <Link
            key={product.id}
            href={`/Products/${product.slug}`} // Updated href to match the correct route
            
            className={styles["coverCard"]}
          >
            <div className={styles["Top-deals-up"]}>
              <div className={styles["img-attach"]}>
                <img
                  src={`/images/${product.images.length > 0 ? product.images[0].url : "default-image.jpg"}`}
                  

                  alt={product.images?.[0]?.altText || "Product Image"}

                />
              </div>

              <p>NEW</p>
            </div>
            <div className={styles["Top-deals-bottom"]}>
              <h4>{product.type}&apos;s Footwear</h4>
              <p className={styles["top-deal-name"]}>{product.name}</p>

              <p className={styles["top-deal-price"]}>{formatPrice(product.price)}

              
              </p>

            <NormalButton  className={styles["Btn"]}>Add to Cart </NormalButton>
            </div>
            
          </Link>
        ))
      ) : (
        <p>No trending products available.</p>
      )}
    </>
  );
};

export default TrendingProducts;
