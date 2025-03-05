'use client'
import { BsFillPatchExclamationFill } from "react-icons/bs";
import { TiInputChecked } from "react-icons/ti";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema } from "../../../Schemas/index";
import { useRouter } from "next/navigation";
import { startTransition, useState, useTransition } from "react";
import { login } from "../../../actions/login";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { DEFAULT_LOGIN_REDIRECT } from "../../../routes";
import { useSearchParams } from "next/navigation";
import styles from "./Login-Form.module.css";
import NormalButton from "../Buttons/Normal-Button";
import InputField from "./InputField";
import Message from "./Message";
import DividerWithText from "./DividerWithText";

const LoginForm = () => {
  const searchParams = useSearchParams();
  const urlError =
    searchParams.get("error") === "OAuthAccountNotLinked"
      ? "Email already in use with different provider"
      : "";

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isPending, startTransition] = useTransition();
  const [success, setSuccess] = useState();

  const router = useRouter();

  // ✅ Fix the useForm initialization
  const form = useForm({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { register, handleSubmit } = form;

  const onSubmit = (values) => {
    setError("");
    setSuccess("");

    startTransition(() => {
      login(values).then((data) => {
        setError(data.error);
        setSuccess(data.success);
      });
    });
  };

  const onClick = (provider) => {
    signIn(provider, {
      callbackUrl: DEFAULT_LOGIN_REDIRECT,
    });
  };

  return (
    <div className={styles["overal-form-cover"]}>
      <form onSubmit={handleSubmit(onSubmit)} className={styles["form-cover"]}>
        <InputField
          register={register}
          name="email"
          type="email"
          className={styles["Login-input-style"]}
          placeholder="Email address"
        />

        <InputField
          register={register}
          name="password"
          type="password"
          className={styles["Login-input-style"]}
          placeholder="Password"
        />
        <p className={styles["forgot-password"]}>Forget password?</p>

        <Message
          type="error"
          icon={BsFillPatchExclamationFill}
          message={error || urlError}
          className={styles["error-style"]}
        />

        <Message
          type="success"
          icon={TiInputChecked}
          message={success}
          className={styles["success-style"]}
        />

        <NormalButton
          type="submit"
          name="submit"
          className={styles["login-btn"]}
        >
          Login
        </NormalButton>
      </form>
      <div className={styles["bottom-style"]}>
        <div className={styles["line-container"]}>
        <DividerWithText text="Or Login with" />
        </div>
        <div className={styles["social-cover-style"]}>
          <NormalButton
            className={styles["social-cover"]}
            onClick={() => onClick("google")}
          >
            <FcGoogle className={styles["social-icon"]} size={30} />
            <p>Google</p>
          </NormalButton>
          <NormalButton
            className={styles["social-cover"]}
            onClick={() => onClick("github")}
          >
            <FaGithub className={styles["social-icon"]} size={30} />
            <p>Github</p>
          </NormalButton>
        </div>

        <div className={styles["dont-have"]}>
          <p>Don &apos; t have an account? </p>

          <Link style={{ color: "#1b4d3e" }} href="/register">
            
            Signup
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
