"use client"; // Ensures this component only runs on the client

import styles from "./Header.module.css";
import Link from "next/link";
import { FaRegUser } from "react-icons/fa";
import { GrFavorite } from "react-icons/gr";
import { PiShoppingCart } from "react-icons/pi";
import { IoMan, IoWoman } from "react-icons/io5";
import { useState, useEffect, useContext } from "react";
import { CiBoxes } from "react-icons/ci";
import { MdFavoriteBorder } from "react-icons/md";
import { FaBaby } from "react-icons/fa";
import { PiBelt } from "react-icons/pi";
import { RiChat3Line, RiContractLine } from "react-icons/ri";
import { CartContext } from "../../context/ProductContext";
import LoginButton from "../Buttons/login-button";
import Image from "next/image";
import { FaUserAlt } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FiCpu, FiShoppingBag, FiEdit3, FiHome, FiActivity, FiMonitor  } from "react-icons/fi";


const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [productsCount, setProductsCount] = useState(0);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const cart = useContext(CartContext);
  const { items } = cart;


  useEffect(() => {
    setProductsCount(cart.items.reduce((sum, product) => sum + product.quantity, 0));
  }, [cart.items]);

  const formatPrice = (price) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
    }).format(price);
  return (
    <>
      {/* Desktop Navigation */}
      <nav className={styles["header-desktop"]}>
        <div className={styles["header-inner"]}>
          <div className={styles["logo-text"]}>
             {/* Hamburger Category Menu */}
<div className={styles["cat-hamburger-wrapper"]}>
  <div className={styles["cat-hamburger-icon"]}>
    ☰
  </div>

  <div className={styles["cat-hamburger-menu"]}>
  <div className={styles["cat-main-item"]}>
    <Link href="/electronics" className={styles["cat-main-link"]}>
      <FiCpu className={styles["cat-icon"]} />
      Electronics
    </Link>
    <div className={styles["cat-sub-menu"]}>
      <Link href="/electronics/homeaudio">Home & Audio</Link>
      <Link href="/electronics/camera">Camera & Photo </Link>
      <Link href="/electronics/accessories ">Accessories</Link>
    </div>
  </div>
  <div className={styles["cat-main-item"]}>
    <Link href="/computers" className={styles["cat-main-link"]}>
      <FiMonitor className={styles["cat-icon"]} />
      Computers
    </Link>
    <div className={styles["cat-sub-menu"]}>
      <Link href="/computers/laptops">Laptops</Link>
      <Link href="/computers/tablets">Tablets</Link>
       <Link href="/computers/mobiles">Mobiles</Link>
      <Link href="/computers/monitors">Monitors</Link>
      <Link href="/computers/printers">Printers</Link>
      <Link href="/computers/servers">Servers</Link>
       <Link href="/computers/accessories ">Accessories</Link>
    </div>
  </div>
  <div className={styles["cat-main-item"]}>
    <Link href="/fashion" className={styles["cat-main-link"]}>
      <FiShoppingBag className={styles["cat-icon"]} />
      Fashion
    </Link>
    <div className={styles["cat-sub-menu"]}>
      <Link href="/fashion/men">Men</Link>
      <Link href="/fashion/women">Women</Link>
      <Link href="/fashion/kids">Kids</Link>
    </div>
  </div>

  <div className={styles["cat-main-item"]}>
    <Link href="/arts" className={styles["cat-main-link"]}>
      <FiEdit3 className={styles["cat-icon"]} />
      Arts & Crafts
    </Link>
    <div className={styles["cat-sub-menu"]}>
      <Link href="/arts/crafting">Crafting</Link>
      <Link href="/arts/fabrics">Fabrics</Link>
      <Link href="/arts/painting">Painting & Drawing</Link>
    </div>
  </div>

  <div className={styles["cat-main-item"]}>
    <Link href="/homekitchen" className={styles["cat-main-link"]}>
      <FiHome className={styles["cat-icon"]} />
      Home & Kitchen
    </Link>
    <div className={styles["cat-sub-menu"]}>
      <Link href="/homekitchen/homedecoration">Home Decorations</Link>
      <Link href="/homekitchen/kitchendinning">Kitchen & Dining</Link>
      <Link href="/homekitchen/furniture">Furniture</Link>
      <Link href="/homekitchen/beddingbath">Bedding & Bath</Link>
    </div>
  </div>

  <div className={styles["cat-main-item"]}>
    <Link href="/sports" className={styles["cat-main-link"]}>
      <FiActivity className={styles["cat-icon"]} />
      Sports
    </Link>
    <div className={styles["cat-sub-menu"]}>
      <Link href="/sports/fitness">Fitness & Exercise</Link>
      <Link href="/sports/accessories">Sports Accessories</Link>
    </div>
  </div>
</div>

</div>
           
            <Link className={styles["new-header-link"]} href="/" >SHOP</Link>
            <Link className={styles["new-header-link"]} href="/" >PAGES</Link>
            <Link className={styles["new-header-link"]} href="/" >FEATURES</Link>
            <Link className={styles["new-header-link"]} href="/" >BLOG</Link>
          </div>
          <div>
            <Link href="/" >
              <Image
                src="/assets/logos/main-logo.png"
                alt="Logo"
                width={150}
                height={50}
                style={{ objectPosition: 'center', objectFit: 'cover' }}
              />
            </Link>
          </div>
          <div className={styles["nav-links-cover"]}>



            <div className={styles["nav-links-icon-cart"]}>
              <FaSearch style={{ color: "#00ab55", fontSize: "16px", cursor: "pointer" }} />
              <LoginButton> <FaUserAlt style={{ color: "#00ab55", fontSize: "16px", cursor: "pointer" }} /> </LoginButton>
              <Link href="/cart" className={styles["Cart-cover"]}>
                <div className={styles["nav-links-cart"]}>
                  <FaShoppingCart style={{ color: "#fff", fontSize: "16px" }} />
                  <span>{productsCount}</span>
                </div>
                <div className={styles["inner-cart"]}>
                  <p>Cart</p>
                  <p>{formatPrice(
                    items.reduce(
                      (total, item) => total + item.price * item.quantity,
                      0
                    )
                  )}</p>
                </div>
              </Link>



            </div>
          </div> </div>
      </nav>

      {/* Mobile Navigation */}
      <nav id={styles["mobile-hamburger-nav"]}>

        <div className={styles["mobile-hamburger-cover"]}>

          <div className={styles["mobile-left"]}>
            <div
              className={`${styles["mobile-hamburger-icon"]} ${menuOpen ? styles["open"] : ""}`}
              onClick={toggleMenu}
            >
              <span />
              <span />
              <span />
            </div>

            <Link href="/" className={styles["mobile-logo"]}>
              <img className={styles["main-logo"]} src="/assets/logos/main-logo-n.png" />
            </Link>
          </div>

          <div className={styles["mobile-icons"]}>
            <LoginButton>
              <FaRegUser className={styles["logo-icon-style"]} />
            </LoginButton>

            <Link href="/cart" className={styles["mobile-cart"]}>
              <PiShoppingCart className={styles["logo-icon-style"]} />
              <span>{productsCount}</span>
            </Link>
          </div>
        </div>

        {/* MENU */}
        <div className={`${styles["mobile-menu"]} ${menuOpen ? styles["open"] : ""}`}>
          <hr className={styles["mobile-divider"]} />
          <p className={styles["mobile-menu-section"]}>Categories</p>

          <ul className={styles["mobile-menu-list"]}>
            <li><Link href="/electronics"><FiCpu /> Electronics</Link></li>
            <li><Link href="/fashion"><FiShoppingBag /> Fashion</Link></li>
            <li><Link href="/computers"><FiMonitor /> Computers</Link></li>
            <li><Link href="/arts"><FiEdit3 /> Arts & Crafts</Link></li>
            <li><Link href="/homekitchen"><FiHome /> Home & Kitchen</Link></li>
            <li><Link href="/sports"><FiActivity /> Sports</Link></li>
          </ul>

          <hr className={styles["mobile-divider"]} />
          <p className={styles["mobile-menu-section"]}>My Account</p>

          <ul className={styles["mobile-menu-list"]}>
            <li><Link href="/contact"><RiChat3Line /> Contact Us</Link></li>
            <li><Link href="/terms"><RiContractLine /> Terms & Conditions</Link></li>
          </ul>
        </div>
      </nav>

    </>
  );
};

export default Header;
