"use client";
import { Button, TextField } from "@mui/material";
import Divider from "@mui/material/Divider";
import Link from "next/link";
import { styled } from "@mui/material/styles";
import Image from "next/image";
import { createUser, handleLoginGithub, handleLoginGoogle } from "@/controller/appwrite";
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

const SignUpForm = () => {
  const router = useRouter();
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const submit = async () => {
    console.log(form)
    if(!form.firstname || !form.lastname || !form.email || !form.password || !form.confirmPassword){
      console.log("All fields are required")
      return;
    }
    if(form.password !== form.confirmPassword){
      console.log("password does not match")
      return
    }
    try {
      await createUser(form.firstname, form.lastname, form.email, form.password);
      router.replace("/")
    } catch (error) {
      console.log(error)
    }

  };
  const handleGoogle = () => {
    handleLoginGoogle().then(() => router.replace("/ob1"));
  };
  const handleGithub = () => {
    handleLoginGithub().then(() => router.replace("/"));
  };
  return (
    <div className="flex flex-col items-center gap-2">
      <h1 className="font-bold text-3xl mb-1">Hello!</h1>
      <Root className="mb-10 font-semibold">
        <Divider>Create Your Account</Divider>
      </Root>
      <form className="flex flex-col w-[100%]">
        <TextField
          size="small"
          margin="normal"
          type="text"
          variant="outlined"
          placeholder="First Name"
          value={form.firstname}
          onChange={(e) => setForm({ ...form, firstname: e.target.value })}
        />
        <TextField
          size="small"
          margin="normal"
          type="text"
          variant="outlined"
          placeholder="Last Name"
          value={form.lastname}
          onChange={(e) => setForm({ ...form, lastname: e.target.value })}
        />
        <TextField
          size="small"
          margin="normal"
          type="email"
          variant="outlined"
          placeholder="E-mail"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <TextField
          size="small"
          margin="normal"
          type="password"
          variant="outlined"
          placeholder="Password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
        <TextField
          size="small"
          margin="normal"
          type="password"
          variant="outlined"
          placeholder="Confirm Password"
          value={form.confirmPassword}
          onChange={(e) => setForm({ ...form, confirmPassword: e.target.value })}
        />
        <Button
          onClick={submit}
          className="mt-5 md:py-3 py-2 bg-blue-600 rounded-lg text-white hover:bg-blue-500"
        >
          Sign UP
        </Button>
      </form>
      <p className="mt-5 mb-5 font-semibold text-gray-500 text-lg">OR</p>
      <div className="flex flex-row md:gap-16 gap-4 text-gray-500">
        <button
          onClick={handleGoogle}
          className="md:px-4 px-3 py-1 md:py-2 flex gap-2 md:gap-3 border rounded-lg border-gray-500 text-sm items-center"
        >
          Sign Up With <p className="hidden md:block">Google</p>
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
          Sign Up With<p className="hidden md:block">Github</p>
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
        Already have an Account ?{" "}
        <Link className="text-blue-500 text-base" href={"/auth/signin"}>
          Login
        </Link>
      </div>
    </div>
  );
};

export default SignUpForm;
