"use client"
import React, { useState } from "react";
import Switch from "@mui/material/Switch";
import ProgressBar from "./ProgressBar";
import CloudInfo from "./CloudInfo";
import { useEffect } from "react";
import { currentUser } from "@/controller/appwrite";


const MainScreen = () => {
  const [name, setName] = useState("User")
useEffect(() => {
  const username = currentUser();
  username.then((e) => setName(e?.username as string))
}, []);

  return (
    <div className="md:mx-10 bg-slate-200 rounded-lg w-full flex flex-col">
      <div className="md:mx-16 md:my-7 flex md:flex-row flex-col justify-between">
        <div className="text-gray-800">
          <h1 className="md:text-5xl text-xl font-bold">Hi {name} !</h1>
          <h4 className="md:text-base text-xs">Welcome to XerCode EcoSystem</h4>
        </div>
        <div className="flex items-center">
          <h2>Test Code</h2> <Switch /> Production Mode{" "}
        </div>
      </div>
      <div className="flex justify-between md:flex-row flex-col">
        <CloudInfo />
        <ProgressBar />
      </div>
    </div>
  );
};

export default MainScreen;
