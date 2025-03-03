import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import CartContextProvider from "./context/ProductContext";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "E-commerce",
  description: "Shop Latest Footwear",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} page-container`}>
        <CartContextProvider>
          <header className="header">
            <Header />
          </header>
          <main className="content">{children}</main>
          <footer className="footer">
            <Footer />
          </footer>
        </CartContextProvider>
      </body>
    </html>
  );
}
