import Image from "next/image";
import React from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import classNames from "classnames";

type Props = {
  img: string;
  color: string;
  title: string;
  status: string;
};

const CardProgressBar = ({ img, color, title, status }: Props) => {
  const classes = classNames("rounded-xl shadow-xl flex justify-between gap-16 p-1.5", {
    [`bg-${color}-500`]: color,
  });

  return (
    <div
      className={classes}
    >
      <div className="pl-3 w-24 flex flex-col justify-center items-start">
        <h1 className="text-black text-lg font-semibold">{title}</h1>
        <h2 className="text-gray-600 text-xs">Status: {status}</h2>
      </div>
      <div className="flex gap-1 justify-center items-center">
        <div className="p-3 border rounded-lg border-orange-300">
          <Image src={img} alt="logo" height={30} width={30} />
        </div>
        <MoreVertIcon fontSize="large" color="action" />
      </div>
    </div>
  );
};

export default CardProgressBar;
