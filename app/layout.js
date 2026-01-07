import { Poppins } from "next/font/google";
import "./globals.css";
import ClientLayout from "./components/layout/ClientLayout"; // Import new client component
import CartContextProvider from "./context/ProductContext";
import { SessionProvider } from "next-auth/react";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "YeffsoStore - E-commerce, Clothing, Shoes, Bags",
  description: "Shop Latest wears",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} page-container`}>
      <SessionProvider>
        <CartContextProvider>
          <ClientLayout>{children}</ClientLayout> {/* Wrap everything inside ClientLayout */}
        </CartContextProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
