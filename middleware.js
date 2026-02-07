import { auth } from "./auth";
import {
  DEFAULT_LOGIN_REDIRECT,
  apiAuthPrefix,
  authRoutes,
  publicRoutes, // publicRoutes still needed for explicit static assets
  protectedRoutes, // New import
} from "./routes";

const isPathMatch = (pathname, patterns) => {
  return patterns.some(pattern => {
    if (pattern.endsWith(":path*")) {
      const basePattern = pattern.slice(0, -":path*".length);
      return pathname.startsWith(basePattern);
    }
    return pathname === pattern;
  });
};

export default auth((req) => {
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;

  const isApiAuthRoute = apiAuthPrefix.some((prefix) =>
    nextUrl.pathname.startsWith(prefix)
  );

  const isAuthRoute = authRoutes.includes(nextUrl.pathname);

  const isProtectedRoute = isPathMatch(nextUrl.pathname, protectedRoutes); // New check

  // favicon.svg and favicon.ico are handled explicitly to bypass broad middleware matcher if needed.
  // Although matcher should ideally exclude them, explicit check adds robustness.
  const isExplicitPublicRoute = isPathMatch(nextUrl.pathname, publicRoutes);

  if (isApiAuthRoute) {
    return null; // Allow API authentication routes
  }

  if (isAuthRoute) {
    if (isLoggedIn) {
      return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl)); // Redirect logged-in users from auth pages
    }
    return null; // Allow unauthenticated users to access auth pages
  }

  // New logic: If it's a protected route and the user is not logged in, redirect to login
  if (isProtectedRoute && !isLoggedIn) {
    return Response.redirect(new URL("/login", nextUrl));
  }

  // If it's not an API auth route, not an auth route, and not a protected route (or it is a protected route AND user is logged in),
  // OR if it's an explicitly defined public route (like favicon), allow access.
  // The 'isExplicitPublicRoute' check is mostly for static assets that middleware.matcher might accidentally catch.
  if (!isProtectedRoute || isLoggedIn || isExplicitPublicRoute) {
    return null; // Allow access
  }

  return null; // Default to allow if no other conditions matched (should cover all other public pages)
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
  runtime: 'nodejs',
};
