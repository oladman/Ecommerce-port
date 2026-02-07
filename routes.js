export const publicRoutes = [
  "/favicon.svg",
  "/favicon.ico",
];

export const authRoutes = ["/login", "/register", "/error"];

export const apiAuthPrefix = ["/api/auth"]; // Ensures all NextAuth API routes are matched

export const protectedRoutes = [
  "/checkout",
  "/checkout/:path*", // Protect all checkout sub-routes
];

export const DEFAULT_LOGIN_REDIRECT = "/cart";
