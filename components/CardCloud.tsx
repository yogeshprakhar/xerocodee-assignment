import Image from "next/image";
import React from "react";
import LoopIcon from "@mui/icons-material/Loop";
type Props = {
  title: string;
  logo: string;
};

const CardCloud = ({ title, logo }: Props) => {
  return (
    <div className="rounded-2xl bg-white shadow-xl flex items-center w-full h-20">
      <div className="mx-4 w-28 flex flex-col gap-2 justify-between items-start">
        <h2 className="font-semibold mt-4 text-lg text-gray-950">{title}</h2>
        <div className="flex flex-row gap-2 items-center">
          <div className="rounded-full h-3 w-3 bg-red-600"></div>
          <div className="rounded-full h-3 w-3 bg-green-600"></div>
          <LoopIcon className="p-1" />
        </div>
      </div>
      <div className="p-3 border border-yellow-500 rounded-xl m-4">
        <Image src={logo} alt="logo" height={40} width={40} />
      </div>
    </div>
  );
};

export default CardCloud;
