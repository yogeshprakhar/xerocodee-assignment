"use client";
import { currentUser, handleLogout } from "@/controller/appwrite";
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const page = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push('/ob2/ob2-2')
  };
    const [name, setName] = useState("User");
    useEffect(() => {
      const username = currentUser();
      username.then((e) => setName(e?.username as string));
    }, []);
  return (
    <div className="min-h-screen min-w-full overflow-hidden">
      <div className="bg-gradient-to-t from-white to-blue-300">
        <div className="flex justify-end px-14 py-10">
          <Button onClick={() => handleLogout()} variant="outlined">
            Logout
          </Button>
        </div>
        <div className="flex flex-col items-center rounded-3xl my-10 md:mx-40 mx-6  bg-white">
          <h1 className="md:mt-28 mt-14 text-xl font-bold md:text-3xl">
            Welcome {name} !
          </h1>
          <div
            className={`mt-20 flex md:flex-row flex-col gap-4 md:gap-48 mb-64`}
          >
            <label className="cursor-pointer border border-gray-300 rounded-lg px-16 py-3 font-semibold hover:bg-blue-500">
              <input
                className={`hidden`}
                name="options"
                type="radio"
                onClick={handleClick}
              />
              <span className="text-center">Self Hosting</span>
            </label>
            <label className="cursor-pointer border border-gray-300 rounded-lg px-16 py-3 font-semibold hover:bg-blue-500">
              <input
                className="hidden"
                name="options"
                type="radio"
                onClick={handleClick}
              />
              <span className="text-center">XeroCodee Hosting</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
