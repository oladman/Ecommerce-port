"use server";
import { LoginSchema } from "../Schemas";
import { signIn } from "../auth";
import { DEFAULT_LOGIN_REDIRECT } from "../routes";
import { AuthError } from "next-auth";
import { getUserByEmail } from "../data/user";
import bcrypt from "bcryptjs";

export async function login(values) {
  const validatedFields = LoginSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "invalid fields!" };
  }

  const { email, password } = validatedFields.data;

  try {
    const user = await getUserByEmail(email);

    if (!user || !user.password) {
      return { error: "Invalid credentials!" };
    }

    const passwordsMatch = await bcrypt.compare(
      password,
      user.password
    );

    if (!passwordsMatch) {
      return { error: "Invalid credentials!" };
    }

    await signIn("credentials", {
      email,
      password,
      redirectTo: DEFAULT_LOGIN_REDIRECT,
    });
  } catch (error) {
    if (error && typeof error === 'object' && 'digest' in error && error.digest?.includes('NEXT_REDIRECT')) {
      throw error;
    }

    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "Invalid credentials!" };
        case "CallbackRouteError":
          return { error: "Callback error during login. Check server logs." };
        default:
          return { error: "Something went wrong! AuthError: " + error.message };
      }
    }
    return { error: "An unexpected server error occurred." };
  }
}