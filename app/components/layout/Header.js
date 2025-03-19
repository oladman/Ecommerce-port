"use client"; // Ensures this component only runs on the client

import styles from "./Header.module.css";
import Link from "next/link";
import { GiMorgueFeet } from "react-icons/gi";
import { BsSearch } from "react-icons/bs";
import { GrFavorite } from "react-icons/gr";
import { HiOutlineUser } from "react-icons/hi";
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

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [productsCount, setProductsCount] = useState(0);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const cart = useContext(CartContext);

  useEffect(() => {
    setProductsCount(cart.items.reduce((sum, product) => sum + product.quantity, 0));
  }, [cart.items]);

  return (
    <>
      {/* Desktop Navigation */}
      <nav className={styles["header-desktop"]}>
        <div className={styles["logo-text"]}>
          <Link href="/" className={styles["link-go-optical"]} style={{ textDecoration: "none", color: "#000", fontWeight: "600" }}>
            <p>
              YEFFSO
              <span>
                <GiMorgueFeet style={{ fontSize: "30px" }} />
              </span>
            </p>
          </Link>
          <div className={styles["support-"]}>
            <p>+234 908 084 773</p>
            <p>Support 24/7</p>
          </div>
        </div>
        <div className={styles["nav-links-cover"]}>
          <div className={styles["nav-links"]}>
            <Link href="/about" className={styles["link-style"]}>All Categories</Link>
            <input />
            <BsSearch className={styles["long-icon"]} />
          </div>
          <div className={styles["nav-links-icon"]}>
            <GrFavorite style={{ color: "#000", fontSize: "20px" }} />
            <LoginButton>
              <HiOutlineUser style={{ color: "#000", fontSize: "20px" }} />
            </LoginButton>
            <Link href="/cart" className={styles["nav-links-item"]}>
              <PiShoppingCart style={{ color: "#000", fontSize: "20px" }} />
              <span>{productsCount}</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav id={styles["hamburger-nav"]}>
        <div className={styles["hamburger-cover"]}>
          <div className={styles["hamburger-menu"]}>
            <div className={styles["cover-left-hamburger-menu"]}>
              <div className={`${styles["hamburger-icon"]} ${menuOpen ? styles["open"] : ""}`} onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <Link href="/" className={styles["link-go-optical-mobile"]} style={{ textDecoration: "none", color: "#000" }}>
                <p>YEFFSO</p>
                <span>
                  <GiMorgueFeet className="logo-icon" />
                </span>
              </Link>
            </div>
            <div className={`${styles["menu-links"]} ${menuOpen ? styles["open"] : ""}`}>
              <hr className={styles["line"]} />
              <p className={styles["top-sign"]}>Categories</p>
              <ul className={styles["menu-links-ul"]}>
                <li className={styles["menu-item"]}><Link href="/orders"><CiBoxes /> Orders</Link></li>
                <li className={styles["menu-item"]}><Link href="/favorites"><MdFavoriteBorder /> Favourites</Link></li>
                <li className={styles["menu-item"]}><Link href="/men"><IoMan /> Men</Link></li>
                <li className={styles["menu-item"]}><Link href="/women"><IoWoman /> Women</Link></li>
                <li className={styles["menu-item"]}><Link href="/kids"><FaBaby /> Kids</Link></li>
                <li className={styles["menu-item"]}><Link href="/belt"><PiBelt /> Belt</Link></li>
              </ul>
              <hr className={styles["line"]} />
              <p className={styles["top-sign"]}>My Account</p>
              <ul className={styles["menu-links-ul"]}>
                <li className={styles["menu-item"]}><Link href="/contact"><RiChat3Line /> Contact Us</Link></li>
                <li className={styles["menu-item"]}><Link href="/terms"><RiContractLine /> Terms & Conditions</Link></li>
              </ul>
            </div>
          </div>
          <div className={styles["nav-links-icon"]}>
            <LoginButton>
              <HiOutlineUser style={{ color: "#000", fontSize: "20px" }} />
            </LoginButton>
            <Link href="/cart" className={styles["nav-links-item"]}>
              <PiShoppingCart style={{ color: "#000", fontSize: "20px" }} />
              <span>{productsCount}</span>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
