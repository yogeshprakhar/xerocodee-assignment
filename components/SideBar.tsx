import React from "react";
import StorageIcon from "@mui/icons-material/Storage";
import Image from "next/image";
const SideBar = () => {
  return (
    <>
      <div className="flex flex-col gap-3 ml-5 mt-3">
        <div className="flex items-center gap-6 hover:cursor-pointer hover:bg-white px-8 py-2 rounded-full">
          <Image src={"/Grid.svg"} alt="logo" height={20} width={20} />{" "}
          XeroCodee
        </div>
        <div className="flex items-center gap-6 hover:cursor-pointer hover:bg-white px-8 py-2 rounded-full w-60">
          <Image src={"/Layers.svg"} alt="logo" height={20} width={20} /> Buider
          Center
        </div>
        <div className="flex items-center gap-6 hover:cursor-pointer hover:bg-white px-8 py-2 rounded-full">
          <Image src={"/hello 1.svg"} alt="logo" height={20} width={20} />{" "}
          Service Board
        </div>
        <div className="flex items-center gap-6 hover:cursor-pointer hover:bg-white px-8 py-2 rounded-full">
          <Image src={"/Vector.svg"} alt="logo" height={20} width={20} />{" "}
          Clusters
        </div>
        <div className="flex items-center gap-6 hover:cursor-pointer hover:bg-white px-8 py-2 rounded-full">
          <Image src={"/Component 19.svg"} alt="logo" height={20} width={20} />{" "}
          Databases
        </div>
        <div className="flex items-center gap-6 hover:cursor-pointer hover:bg-white px-8 py-2 rounded-full">
          <Image src={"/Hard Drive.svg"} alt="logo" height={20} width={20} />{" "}
          Enviorment
        </div>
        <div className="flex items-center gap-6 hover:cursor-pointer hover:bg-white px-8 py-2 rounded-full">
          <Image src={"/Vector-1.svg"} alt="logo" height={20} width={20} />{" "}
          Workflow
        </div>
        <div className="flex items-center gap-6 hover:cursor-pointer hover:bg-white px-8 py-2 rounded-full">
          <Image src={"/monitoring 1.svg"} alt="logo" height={20} width={20} />{" "}
          Monitoring
        </div>
        <div className="flex items-center gap-6 hover:cursor-pointer hover:bg-white px-8 py-2 rounded-full">
          <Image src={"/security 1.svg"} alt="logo" height={20} width={20} />{" "}
          Security
        </div>
        <div className="flex items-center gap-6 hover:cursor-pointer hover:bg-white px-8 py-2 rounded-full">
          <Image src={"/Vector-2.svg"} alt="logo" height={20} width={20} /> Web
          Hooks
        </div>
        <div className="flex items-center gap-6 hover:cursor-pointer hover:bg-white px-8 py-2 rounded-full">
          <Image src={"/Menu 2.svg"} alt="logo" height={20} width={20} /> Log
          Error
        </div>
      </div>
    </>
  );
};

export default SideBar;
