import Image from "next/image";
import { notFound } from "next/navigation";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FiShare } from "react-icons/fi";
import styles from "./page.module.css";
import { LuHeart } from "react-icons/lu";
import Button from "@/app/components/Buttons/Button";
import Link from "next/link";
import { FaCcVisa } from "react-icons/fa";
import { FaCcMastercard } from "react-icons/fa6";
import { FaCcPaypal } from "react-icons/fa";
import { TbTruckReturn } from "react-icons/tb";
import CartButton from "@/app/components/Buttons/CartButton";


async function page({ params }) {
  const { slug } = params; // Get the slug from the URL

  // Fetch product data using the slug
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/products/${encodeURIComponent(
      slug
    )}`,
    {
      cache: "no-store", // Disable caching to ensure fresh data
    }
  );

  if (!response.ok) {
    return <div>Error fetching product details.</div>;
  }

  const product = await response.json();

  // If no product is found, return a 404 page
  if (!product || product.error) {
    notFound();
  }

  // Construct image URL
  const imageUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/images/${product.images[0].url}`;




  return (
    <div id="wrapper">
      <div className={styles["pattern-page"]}>
        <div className={styles["Page-nav-cat"]}>
          <div className={styles["_CatName"]}>
            <p>Home</p>
            <div>
              <MdKeyboardArrowRight
                style={{ display: "flex", alignItems: "center" }}
              />
            </div>
          </div>
          <div className={styles["_CatName"]}>
            <p>Men</p>
            <div>
              <MdKeyboardArrowRight />
            </div>
          </div>
          <p>{product.name}</p>
        </div>
        <div className={styles["Main-product-content"]}>
          <div className={styles["main-product-content-left"]}>
            {product.images?.length > 0 ? (
              <div className={styles['images']}>
                {/* First Image - Big size */}
                <Image
                  key="first-image"
                  src={`${process.env.NEXT_PUBLIC_BASE_URL}/images/${product.images[0].url}`}
                  alt={product.images[0].altText || "Product Image"}
                  width={500}
                  height={500}
                  className={styles['product-image']}
                />
                {/* Other Images - Small size */}
                <div className={styles['images-two']} >
                  {product.images.slice(1).map((image, index) => (
                    <Image
                      key={index}
                      className={styles['product-image']}
                      src={`${process.env.NEXT_PUBLIC_BASE_URL}/images/${image.url}`}
                      alt={image.altText || "Product Image"}
                      width={150}
                      height={150}
                    />
                  ))}
                </div>
              </div>
            ) : (
              <p>No images available</p>
            )}

            <div className={styles["overal-cover-product-details-icon"]}>
              <div className={styles["cover-product-details-icon"]}>
                <FiShare size={18} />
              </div>
              <div className={styles["cover-product-details-icon"]}>
                <LuHeart size={18} />
              </div>
            </div>
          </div>
          <div className={styles["main-product-content-right"]}>
            <h1 className={styles["Pname"]}>{product.name}</h1>
            <div className={styles["Pprice-cover"]}>
              <del className={styles["Discount"]}>
                ₦ {parseInt(product.price) + 5000}.00
              </del>
              <p className={styles["Pprice"]}>₦{product.price}</p>
            </div>
            <div className={styles["main-product-content-details"]}>
              <p>Description:</p>
              <p>{product.Description}</p>
            </div>

            <div className={styles["PColor"]}>
              <p>Color: </p>{" "}
              <p>
                {product.colors?.length > 0
                  ? product.colors.join(", ")
                  : "No colors available"}
              </p>
            </div>
            <div className={styles["Psize"]}>
              <p>Size: </p> <p>M</p>
            </div>
            <div className={styles["sizes"]}>
              {product.sizes?.length > 0 ? (
                product.sizes.map((size, index) => (
                  <div className={styles["each-sizes"]} key={index}>
                    {size}
                  </div> // Display each size in its own div
                ))
              ) : (
                <div>No sizes available</div>
              )}
            </div>
            <div className={styles["Buttons"]}>
            <CartButton product={product} name=" Add to Cart" styleType="btn-one"/>
              <Button name="Buy Now" styleType="btn-two" />
              
            </div>
            <div className={styles["Delivery-info"]}>
              <Link className={styles["info-link"]} href={"/"}>
                Delivery Terms & Condition
              </Link>
              <div className={styles["Accepted-pay"]}>
                <p>Secure your payment guarantee.</p>
                <div className={styles["payment-lists"]}>
                  <FaCcVisa size={30} /> <FaCcMastercard size={30} />{" "}
                  <FaCcPaypal size={30} />
                </div>
              </div>
            </div>
            <div className={styles["return"]}>
              <div>
                <div className={styles["icon-return"]}>
                  <TbTruckReturn size={20} />
                  <p>Return</p>
                </div>
                <p className={styles["caution"]}>
                  You have <span>{product.returnDays} days</span> to return the
                  item(s) using any of the following methods:
                </p>
              </div>
              <ul className={styles["caution-list"]}>
                <li>
                  <p>Free store return</p>
                </li>
                <li>
                  <p>Free returns via USPS Dropoff Service</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
