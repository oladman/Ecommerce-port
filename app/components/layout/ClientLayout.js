"use client"; // This makes it a client component

import { usePathname } from "next/navigation";
import Header from "./Header";
import Footer from "./Footer";

export default function ClientLayout({ children }) {
  const pathname = usePathname();
  const hideHeaderFooterRoutes = ["/register", "/login"];
  const shouldHideHeaderFooter = hideHeaderFooterRoutes.includes(pathname);

  return (
    <>
      {!shouldHideHeaderFooter && <Header />}
      <main className="content">{children}</main>
      {!shouldHideHeaderFooter && <Footer />}
    </>
  );
}
