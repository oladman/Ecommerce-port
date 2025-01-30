import Link from "next/link";
import styles from "./ProductBoard.module.css";

// Reusable component to fetch and display products
const ProductBoard = async ({ category = "men", limit = 10, imagePath = "/images/" }) => {
  
  // Function to fetch products based on category
  const getProducts = async () => {
    try {
      const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
      const res = await fetch(`${baseUrl}/api/${category}`, {
        cache: "no-store", // Ensures fresh data is fetched
      });
  
      if (!res.ok) {
        throw new Error(`Failed to fetch products for ${category}. Status: ${res.status}`);
      }
  
      const products = await res.json();
      return products.slice(0, limit); // Limit the results to the specified number of products
    } catch (error) {
      console.error(`Error fetching products for ${category}:`, error);
      return null; // Handle errors gracefully
    }
  };

  // Fetch products for the given category
  const ProductList = await getProducts();

  // Handle errors or no products
  if (!ProductList) {
    return <p>Error fetching products. Please try again later.</p>;
  }

  return (
    <div className={styles["Products-Panelcat"]}>
      {ProductList.length > 0 ? (
        ProductList.map((Product) => (
          <div className={styles["productcatp"]} key={Product.id}>
            <Link href={`/Products/${Product.id}`} className={styles["Link-catp"]}>
              <div className={styles["ProductImagecatp"]}>
                <div className={styles["image-open"]}>
                  <img src={`${imagePath}${Product.ProductAttach}`} alt={Product.ProductName} />
                </div>
                <div className={styles["Instockcatp"]}>{}</div>
              </div>
              <div className={styles["ProductTextcatp"]}>
                <p style={{ textAlign: "left" }} className={styles["ProductNamecatp"]}>
                  {Product.ProductName}
                </p>
                <p style={{ textAlign: "left" }} className={styles["MainPricecatp"]}>
                  ₦ {Product.Price}
                </p>
                <del className={styles["del-style"]}>
                  ₦ {parseInt(Product.Price) + 5000}.00
                </del>
              </div>
            </Link>
          </div>
        ))
      ) : (
        <p>No products available.</p>
      )}
    </div>
  );
};

export default ProductBoard;
