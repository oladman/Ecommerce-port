import styles from './Footer.module.css';
import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import Link from 'next/link';

function Footer() {
  return (
    <>
      <div className={styles['footer-cover']}>
        <div className={styles['footer-card']}>
          <div className={styles['footer-section-one']}>
            <h3>YEFFSO <span>FEET</span></h3>
            <p>Introducing the epitome of sophistication and craftsmanship in footwear for matured men in 2024. Our latest collection seamlessly marries timeless style with contemporary design, resulting in handcrafted masterpieces that exude refinement and elegance.</p>
          </div>
          <div className={styles['footer-section-two']}>
            <p>ABOUT YEFFSO</p>
            <ul>
              <li><Link href="#" className={styles['footer-link']}>About Us</Link></li>
              <li><Link href="#" className={styles['footer-link']}>Terms and conditions</Link></li>
              <li><Link href="#" className={styles['footer-link']}>Privacy Notice</Link></li>
              <li><Link href="#" className={styles['footer-link']}>Refund Policy</Link></li>
            </ul>
          </div>
          <div className={styles['footer-section-three']}>
            <p>NEED HELP?</p>
            <ul>
              <li><Link href="#projects" className={styles['footer-link']}>Help Center</Link></li>
              <li><Link href="#about" className={styles['footer-link']}>Report Product</Link></li>
              <li><Link href="#contact" className={styles['footer-link']}>Contact Us</Link></li>
            </ul>
          </div>
          <div className={styles['footer-section-four']}>
            <p>JOIN US ON</p>
            <ul>
              <li><Link href="https://www.linkedin.com/in/seunayo-oladimeji-b03573123/" target="_blank" className={styles['footer-link']}><FaLinkedinIn /></Link></li>
              <li><Link href="https://instagram.com/iam_oladman" target="_blank" className={styles['footer-link']}><FaInstagram /></Link></li>
              <li><Link href="https://x.com/iam_oladman" target="_blank" className={styles['footer-link']}><FaXTwitter /></Link></li>
              <li><Link href="https://github.com/oladman" target="_blank" className={styles['footer-link']}><FaGithub /></Link></li>
              <li><Link href="https://wa.me/2349068084773" target="_blank" className={styles['footer-link']}><FaWhatsapp /></Link></li>
            </ul>
            <Link href="mailto:Oladimejiseunayo@gmail.com" className={styles['mailto-']}>info@Yeffso.com</Link>
          </div>
        </div>
        <div className={styles['divider-footer']}>Copyright © 2022 Oladimeji Seunayo Ezekiel. All Rights Reserved.</div>
      </div>
    </>
  );
}

export default Footer;
