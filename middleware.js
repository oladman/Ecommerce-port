import { auth } from "./auth";
import {
  DEFAULT_LOGIN_REDIRECT,
  apiAuthPrefix,
  authRoutes,
  publicRoutes,
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


  const isPublicRoute = isPathMatch(nextUrl.pathname, publicRoutes);

  const isAuthRoute = authRoutes.includes(nextUrl.pathname);

  if (isApiAuthRoute) {
    return null;
  }

  if (isAuthRoute) {
    if (isLoggedIn) {
      return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
    }
    return null;
  }

  if (!isLoggedIn && !isPublicRoute) {
    return Response.redirect(new URL("/login", nextUrl));
  }

  return null;
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
  runtime: 'nodejs',
};
