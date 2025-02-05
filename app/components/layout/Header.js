'use client'
import Link from 'next/link';
import { GiMorgueFeet } from 'react-icons/gi';
import { BsSearch } from 'react-icons/bs';
import { GrFavorite } from 'react-icons/gr';
import { HiOutlineUser } from 'react-icons/hi';
import { PiShoppingCart } from 'react-icons/pi';
import { IoMan } from "react-icons/io5";
import { useState } from 'react';
import { IoWoman } from "react-icons/io5";
import { CiBoxes } from "react-icons/ci";
import { MdFavoriteBorder } from "react-icons/md";
import { FaBaby } from "react-icons/fa";
import { PiBelt } from "react-icons/pi";
import { RiChat3Line } from "react-icons/ri";
import { RiContractLine } from "react-icons/ri";
import styles from './Header.module.css'; 

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const categoryIcons = {
    Orders: <CiBoxes  size={18} />,
    Favourites: <MdFavoriteBorder size={18} />,
    Men: <IoMan size={18} />,
    Women: <IoWoman size={18} />,
    Kid: <FaBaby size={18} />,
    Belt: <PiBelt size={18} />,
    'Contact us': <RiChat3Line size={18} />
  };
  const categoryIconstwo = {
    'Contact us': <RiChat3Line size={18} />,
    'Terms & Condtion': <RiContractLine size={18} />
  };
  return (
    <>
      {/* Desktop Navigation */}
      <nav className={styles['header-desktop']}>
        <div className={styles['logo-text']}>
          <Link href="/" className={styles['link-go-optical']} style={{ textDecoration: "none", color: "#000", fontWeight: "600" }}>
            <p>
              YEFFSO
              <span>
                <GiMorgueFeet style={{ fontSize: "30px" }} />
              </span>
            </p>
          </Link>
          <div className={styles['support-']}>
            <p>+234 908 084 773</p>
            <p>Support 24/7</p>
          </div>
        </div>
        <div className={styles['nav-links-cover']}>
          <div className={styles['nav-links']}>
            <Link href="/about" className={styles['link-style']}>
              All Categories
            </Link>
            <input />
            <BsSearch className={styles['long-icon']} />
          </div>
          <div className={styles['nav-links-icon']}>
            <div>
              <GrFavorite style={{ color: "#000", fontSize: "20px" }} />
            </div>
            <div>
              <HiOutlineUser style={{ color: "#000", fontSize: "20px" }} />
            </div>
            <Link href="/cart" className={styles['nav-links-item']}>
              <PiShoppingCart style={{ color: "#000", fontSize: "20px" }} />
              <span></span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile Hamburger Navigation */}
      <nav id={styles['hamburger-nav']}>
        <div className={styles['hamburger-cover']}>
          <div className={styles['hamburger-menu']}>
            <div className={styles['cover-left-hamburger-menu']}>
              <div className={`${styles['hamburger-icon']} ${menuOpen ? styles['open'] : ''}`} onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <Link href="/" className={styles['link-go-optical-mobile']} style={{ textDecoration: "none", color: "#000" }}>
                <p>
                  YEFFSO
                </p>
                <span>
                    <GiMorgueFeet className='logo-icon'  />
                  </span>
              </Link>
              
            </div>
            <div className={`${styles['menu-links']} ${menuOpen ? styles['open'] : ''}`}>
            <hr className={styles['line']} />
            <div>
              <p className={styles['top-sign']}>Categories</p>
              <ul className={styles['menu-links-ul']}>
    {['Orders', 'Favourites', 'Men', 'Women', 'Kid', 'Belt'].map((item, index) => (
      <li key={index} className={styles['menu-item']} onClick={toggleMenu}>
        <Link href={`#${item.toLowerCase()}`} className={styles['link-style-mobile']}>
          {categoryIcons[item]} {/* Render icon before text */}
          <span style={{ marginLeft: '8px' }}>{item}</span>
        </Link>
      </li>
    ))}
  </ul></div>
  <hr className={styles['line']} />
  <div>
  <p className={styles['top-sign']}>My Account</p>
  <ul className={styles['menu-links-ul']}>
    {['Contact us', 'Terms & Condtion'].map((item, index) => (
      <li key={index} className={styles['menu-item']} onClick={toggleMenu}>
        <Link href={`#${item.toLowerCase()}`} className={styles['link-style-mobile']}>
          {categoryIconstwo[item]} {/* Render icon before text */}
          <span style={{ marginLeft: '8px' }}>{item}</span>
        </Link>
      </li>
    ))}
  </ul>
  </div>
            </div>
          </div>
          <div className={styles['nav-links-icon']}>
            <div>
              <HiOutlineUser style={{ color: "#000", fontSize: "20px" }} />
            </div>
            <Link href="/cart" className={styles['nav-links-item']}>
              <PiShoppingCart style={{ color: "#000", fontSize: "20px" }} />
              <span></span>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
