"use client";
import { Button } from "@mui/material";
import Divider from "@mui/material/Divider";
import Link from "next/link";
import { styled } from "@mui/material/styles";
import Image from "next/image";
import { handleLoginGithub, handleLoginGoogle, signIn } from "@/controller/appwrite";
import { useRouter } from "next/navigation";
import { useState } from "react";


const Root = styled("div")(({ theme }) => ({
  width: "100%",
  ...theme.typography.body2,
  color: theme.palette.text.secondary,
  "& > :not(style) ~ :not(style)": {
    marginTop: theme.spacing(2),
  },
}));

const SignInForm = () => {
  const router = useRouter();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const submit = async () => {
    console.log(form);
    if (
      !form.email ||
      !form.password
    ) {
      console.log("All fields are required");
      return;
    }
    try {
      await signIn(
        form.email,
        form.password
      );
      router.replace("/");
    } catch (error) {
      console.log(error);
    }
  };
  const handleGoogle = () => {
    handleLoginGoogle();
  };
  const handleGithub = () => {
    handleLoginGithub();
  };
  return (
    <>
      <div className="flex flex-col items-center gap-2">
        <h1 className="font-bold text-3xl mb-1">Hello!</h1>
        <Root className="mb-10 font-semibold">
          <Divider>Login To Your Account</Divider>
        </Root>
        <form className="flex flex-col gap-5 w-full">
          <input
            placeholder="Email-Id"
            type="text"
            className="focus:shadow-slate-500 focus:shadow-lg hover:shadow-lg text-gray-600 md:px-9 px-5 md:py-3 py-1 rounded-lg border border-gray-400 focus:outline-none text-lg"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          <input
            placeholder="Password"
            type="password"
            className="focus:shadow-slate-500 focus:shadow-lg hover:shadow-lg text-gray-600 md:px-9 px-5 md:py-3 py-1 rounded-lg border border-gray-400 focus:outline-none text-lg"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />

          <Button onClick={submit} className="md:py-3 py-2 bg-blue-600 rounded-lg text-white hover:bg-blue-500">
            Sign In
          </Button>
        </form>
        <p className="mt-5 mb-5 font-semibold text-gray-500 text-lg">OR</p>
        <div className="flex flex-row md:gap-16 gap-4 text-gray-500">
          <button
            onClick={handleGoogle}
            className="md:px-4 px-3 py-1 md:py-2 flex gap-2 md:gap-3 border rounded-lg border-gray-500 text-sm items-center"
          >
            Login With <p className="hidden md:block">Google</p>
            <Image
              height={20}
              width={20}
              src={
                "https://res.cloudinary.com/ddjdz0aqe/image/upload/v1717266558/google_cayulq.png"
              }
              alt="googleImage"
            />
          </button>
          <button
            onClick={handleGithub}
            className="md:px-4 md:py-2 px-3 py-1 flex gap-2 md:gap-3 border rounded-lg border-gray-500 text-sm items-center"
          >
            Login With<span className="hidden md:block">Github</span>
            <Image
              height={24}
              width={24}
              src={
                "https://res.cloudinary.com/ddjdz0aqe/image/upload/v1717266558/github_oc80vx.png"
              }
              alt="googleImage"
            />
          </button>
        </div>
        <div className="text-sm pt-6 text-gray-500">
          Don not have an Account ?{" "}
          <Link className="text-blue-500 text-base" href={"/auth/signup"}>
            Sign Up
          </Link>
        </div>
      </div>
    </>
  );
};

export default SignInForm;
