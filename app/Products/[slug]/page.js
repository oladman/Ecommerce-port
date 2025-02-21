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
    <div id="wrapper">
      <div className={styles["pattern-page"]}>
        <div className={styles["breadcrumb"]}>
          <Link className={styles["breadcrumb-link-name"]} href={"/"}>
            Home
          </Link>

          <Link className={styles["breadcrumb-link-name"]} href={"/"}>
            Men
          </Link>

          <Link
            className={styles["breadcrumb-link-name"]}
            href={`/Products/${product.slug}`}
          >
            {product.name}
          </Link>
        </div>

        <div className={styles["Main-product-content"]}>
          <div className={styles["main-product-content-left"]}>
            {product.images?.length > 0 ? (
              <div className={styles["images-container"]}>
                <div className={styles["scrollable-images"]}>
                  {product.images.map((image, index) => (
                    <Image
                      key={index}
                      className={styles["product-image"]}
                      src={`${process.env.NEXT_PUBLIC_BASE_URL}/images/${image.url}`}
                      alt={image.altText || "Product Image"}
                      width={400} // Adjust to your desired uniform size
                      height={500}
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
              <p className={styles["Pprice"]}>{formatPrice(product.price)}</p>
              <del className={styles["Discount"]}>
                ₦ {parseInt(product.price) + 5000}.00
              </del>
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
              <CartButton
                product={product}
                name=" Add to Cart"
                styleType="btn-one"
              />
             
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
