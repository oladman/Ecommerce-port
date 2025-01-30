'use client'
import Link from 'next/link';
import { GiMorgueFeet } from 'react-icons/gi';
import { BsSearch } from 'react-icons/bs';
import { GrFavorite } from 'react-icons/gr';
import { HiOutlineUser } from 'react-icons/hi';
import { PiShoppingCart } from 'react-icons/pi';
import { useState } from 'react';
import styles from './Header.module.css'; // Import your CSS module

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className={styles['header-desktop']}>
        <div className={styles['logo-text']}>
          <Link href="/about" className={styles['link-go-optical']} style={{ textDecoration: "none", color: "#000", fontWeight: "600" }}>
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
              <Link href="/about" className={styles['link-go-optical']} style={{ textDecoration: "none", color: "#000" }}>
                <p>
                  YEFFSO
                </p>
              </Link>
              <span>
                    <GiMorgueFeet className='logo-icon'  />
                  </span>
            </div>
            <div className={`${styles['menu-links']} ${menuOpen ? styles['open'] : ''}`}>
              <ul className={styles['menu-links-ul']}>
                {['About', 'Experience', 'Projects', 'Contact'].map((item, index) => (
                  <li key={index} className={styles['menu-item']} onClick={toggleMenu}>
                    <Link href={`#${item.toLowerCase()}`} className={styles['link-style-mobile']}>
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
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
