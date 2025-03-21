import authConfig from "./auth.config";
import NextAuth from "next-auth";
import {
  DEFAULT_LOGIN_REDIRECT,
  apiAuthPrefix,
  authRoutes,
  publicRoutes,
} from "./routes";

const { auth } = NextAuth(authConfig);

export default auth((req) => {
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;
  const { pathname } = nextUrl;

  // Allow API authentication routes
  if (apiAuthPrefix.some(route => pathname.startsWith(route))) {
    return null;
  }

  // Allow access to authentication pages like /login, /register, /error
  if (authRoutes.includes(pathname)) {
    if (isLoggedIn) {
      return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
    }
    return null;
  }

  // Allow all public routes
  if (publicRoutes.some(route => pathname.startsWith(route))) {
    return null;
  }

  // ✅ Restrict only "/checkout"
  if (pathname === "/checkout" && !isLoggedIn) {
    return Response.redirect(new URL("/login", nextUrl));
  }

  return null; // Allow access to everything else
});

export const config = {
  matcher: [
    "/checkout", // ✅ Protect only the checkout page
    "/(api|trpc)(.*)", // Match API and TRPC routes
  ],
};
