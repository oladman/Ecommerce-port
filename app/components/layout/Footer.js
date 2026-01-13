import "./Footer.css";
import { MdLocalShipping } from "react-icons/md";
import { RiSecurePaymentLine } from "react-icons/ri";
import { RiCustomerService2Fill } from "react-icons/ri";
import { FaRegStar } from "react-icons/fa";
import { RiVisaLine } from "react-icons/ri";
import { FaCcMastercard } from "react-icons/fa";
import { FaCcPaypal } from "react-icons/fa";
import { FaGooglePay } from "react-icons/fa";
import { FaApplePay } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer">
      
      <div className="footer-newsletter">
        <div className="footer-newsletter-text">
          <h3>Sign up to our news & offers</h3>
          <p>
            Be the first to know about exclusive offers, new services, couriers,
            tools and more!
          </p>
        </div>

        <form className="footer-newsletter-form">
          <input
            type="email"
            placeholder="email@address.com"
            className="footer-input"
          />
          <button className="footer-button">Sign up</button>
        </form>
      </div>

    
      <div className="footer-main">
        <div className="footer-brand">
          <img src="/assets/logos/main-logo-n.png" className="footer-logo" alt="Yeffso logo"/>
          <div className="footer-rating"> <p>Our e-commerce website leads the market with fast performance, seamless UX, secure payments, responsive design, real-time support, and innovative features.</p>
          </div>
        </div>

        <div className="footer-columns">
          <div className="footer-column">
            <h4>Company</h4>
            <ul>
              <li>About us</li>
              <li>Reviews</li>
              <li>Privacy policy</li>
              <li>Cookie policy</li>
              <li>Terms & conditions</li>
              <li>Acceptable use policy</li>
              <li>Sitemap</li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Shipping services</h4>
            <ul>
              <li>Ship a package</li>
              <li>Track a package</li>
              <li>Domestic shipping</li>
              <li>International shipping</li>
              <li>Bulk shipping</li>
              <li>Couriers</li>
              <li>Delivery services</li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Customers</h4>
            <ul>
              <li>Log in</li>
              <li>Register</li>
              <li>Contact us</li>
              <li>Support hub</li>
              <li>Preferences</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-highlights">
        <div><div ><MdLocalShipping className="icon" /></div> <p>Shipping to <br /> <span>OVER 200 COUNTRIES</span></p></div>
        <div><div><RiSecurePaymentLine className="icon" /> </div><p>100% Secure <br /> <span>CHECKOUT</span></p></div>
        <div><div><RiCustomerService2Fill className="icon" /></div> <p>Outstanding <br /> <span>WORLDWIDE SUPPORT</span></p></div>
        <div><div><FaRegStar className="icon" /> </div><p>Over 9,000 <br /> <span>GENUINE REVIEWS</span></p></div>
      </div>

      <div className="footer-bottom">
        <p>© 2021–2024 | All Rights Reserved </p>
 <div className="featured"> This project is featured in Oladimeji’s portfolio.
  <Link href="https://oladimejiseunayo.vercel.app/" target="_blank"
  rel="noopener noreferrer">
    View here
  </Link>
</div>
        <div className="footer-payments">
          <span><RiVisaLine  className="icon"/></span>
          <span><FaCcMastercard  className="icon" /></span>
          <span><FaCcPaypal  className="icon" /></span>
          <span><FaApplePay  className="icon" /></span>
          <span><FaGooglePay  className="icon" /></span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
