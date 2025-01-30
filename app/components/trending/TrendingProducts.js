import Link from "next/link";
import styles from "./TrendingProducts.module.css"

const getTrendingProducts = async () => {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
    const res = await fetch(`${baseUrl}/api/products`, {
      cache: "no-store", // Ensures fresh data is fetched
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch Trending Products. Status: ${res.status}`);
    }

    const products = await res.json();
    return products.slice(0, 4); // Limit the results to the first 4 products
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

  return (
    <>
      {trendingProducts.length > 0 ? (
        trendingProducts.map((product) => (
          <Link
          key={product.id}
          href={`/Products/${product.id}`}
          className={styles['coverCard']}
        >
          <div className={styles['Top-deal-main']}>
            <div className={styles['Top-deals-up']}>
            <img src={`/images/${product.ProductAttach}`} alt={product.ProductName} />

              <p>
                NEW <span>**</span>
              </p>
            </div>
            <div className={styles['Top-deals-bottom']}>
              <h4>Men&apos;s Footwear</h4>
              <p className={styles['top-deal-name']}>{product.ProductName}</p>
              <div>
                <p className={styles['top-deal-price']}>₦ {product.Price}</p>
                <button>Add to cart</button>
              </div>
            </div>
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
