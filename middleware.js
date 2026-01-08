// middleware.js
import { DEFAULT_LOGIN_REDIRECT } from "./routes";

export default async function middleware(req) {
  const { nextUrl } = req;
  const { pathname } = nextUrl;

  // Protect only checkout page
  if (pathname === "/checkout") {
    const token = req.cookies.get("next-auth.session-token");
    if (!token) {
      return Response.redirect(new URL("/login", nextUrl));
    }
  }

  return null; // allow everything else
}

export const config = {
  matcher: ["/checkout", "/(api|trpc)(.*)"],
};
