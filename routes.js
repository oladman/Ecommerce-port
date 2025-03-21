export const publicRoutes = [
  "/",  //Home route
  "/api/products", // Country API route
  "/api/product/:path*", // Wildcard to match dynamic segments like /api/country/[id]
];

export const authRoutes = ["/login", "/register", "/error"];

export const apiAuthPrefix = ["/api/auth"]; // Ensures all NextAuth API routes are matched

export const DEFAULT_LOGIN_REDIRECT = "/cart";
