"use client";
import { currentUser, handleLogout } from "@/controller/appwrite";
import { Button } from "@mui/material";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const OnBoardOne = () => {
  const [hidden, setHidden] = useState(true);
      const router = useRouter();

  const [value, setValue] = useState("");
  const changeValues = (option: string) => {
    setHidden(false);
    setValue(option);
  };
  const handleClick = () => {
    router.replace("/");
  };
    const [name, setName] = useState("User");
    useEffect(() => {
      const username = currentUser();
      username.then((e) => setName(e?.username as string));
    }, []);
  return (
    <div className="min-h-screen min-w-full overflow-hidden">
      <div className="bg-gradient-to-t from-white to-blue-200">
        <div className="flex justify-end px-14 py-10">
          <Button onClick={() => handleLogout()} variant="outlined">
            Logout
          </Button>
        </div>
        <div className="flex flex-col items-center rounded-3xl my-10 mx-40  bg-white">
          <h1 className="md:mt-28 mt-14 text-xl font-bold md:text-3xl">
            Welcome {name} !
          </h1>
          <div
            className={`mt-20 flex md:flex-row flex-col gap-4 md:gap-48 ${
              hidden ? " mb-64" : "mb-0"
            }`}
          >
            <label className="cursor-pointer border border-gray-300 rounded-lg px-16 py-3 font-semibold hover:bg-blue-500">
              <input
                className="hidden"
                name="options"
                type="radio"
                onClick={handleClick}
              />
              <span>Developer</span>
            </label>
            <label
              className={`${
                value === "Organisation Name"
                  ? "cursor-pointer border border-gray-300 bg-blue-500 text-white rounded-lg px-16 py-3 font-semibold"
                  : "cursor-pointer border border-gray-300 rounded-lg px-16 py-3 font-semibold hover:bg-blue-500"
              }`}
            >
              <input
                className={`hidden`}
                name="options"
                type="radio"
                onClick={() => changeValues("Organisation Name")}
              />
              <span>Organization</span>
            </label>
            <label
              className={`${
                value === "Company Name"
                  ? "cursor-pointer border border-gray-300 bg-blue-500 text-white rounded-lg px-16 py-3 font-semibold"
                  : "cursor-pointer border border-gray-300 rounded-lg px-16 py-3 font-semibold hover:bg-blue-500"
              }`}
            >
              <input
                className="hidden"
                name="options"
                type="radio"
                onClick={() => changeValues("Company Name")}
              />
              <span>Company</span>
            </label>
          </div>
          <div
            className={`mt-28 mb-24 flex flex-col md:flex-row gap-4 ${
              hidden ? "hidden" : "block"
            }`}
          >
            <input
              placeholder={value}
              type="text"
              className="focus:shadow-slate-500 focus:shadow-lg hover:shadow-lg text-gray-600 md:px-9 px-5 md:py-2 py-1 rounded-lg border border-gray-400 focus:outline-none text-lg"
            />
            <Button onClick={handleClick} variant="contained" className="px-6">
              Submit
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnBoardOne;
