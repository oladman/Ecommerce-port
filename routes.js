export const publicRoutes = [
  "/",  //Home route
  "/api/products/:path*", // Wildcard to match dynamic segments like /api/products/top-rated, /api/products/[id], etc.
  "/api/product/:path*", // Wildcard to match dynamic segments like /api/country/[id]
  "/api/hero-banners",
  "/favicon.svg",
  "/favicon.ico",
];

export const authRoutes = ["/login", "/register", "/error"];

export const apiAuthPrefix = ["/api/auth"]; // Ensures all NextAuth API routes are matched

export const DEFAULT_LOGIN_REDIRECT = "/cart";
