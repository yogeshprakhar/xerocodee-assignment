import Image from "next/image";
import React from "react";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import CardGiftcardOutlinedIcon from "@mui/icons-material/CardGiftcardOutlined";
import SettingsIcon from "@mui/icons-material/Settings";
import XeroDropDown from "./XeroDropDown";
const NavBar = () => {
  return (
    <div className="flex items-center justify-between mx-5 my-4">
      <div className="mx-4">
        <Image height={150} width={150} src={"/logo_4.png"} alt={"xerocode"} />
      </div>
      <div className="flex gap-7 items-center">
        <div className="flex items-center gap-1 bg-yellow-300 p-1 rounded-full">
          <span className="bg-white rounded-full p-1">
            <CardGiftcardOutlinedIcon fontSize="medium" />
          </span>{" "}
          Upgrade Plan
        </div>
        <div className="bg-white px-2.5 py-2 rounded-lg">
          <NotificationsNoneIcon fontSize="medium" color="primary" />
        </div>
        <div className="bg-white px-2.5 py-2 rounded-lg">
          <MailOutlineIcon fontSize="medium" color="primary" />
        </div>
        <div className="bg-white px-2.5 py-2 rounded-lg">
          <SettingsIcon fontSize="medium" color="primary" />
        </div>
        <div> <XeroDropDown/> </div>
        <div className="bg-white px-2.5 py-2 rounded-lg">
          <Person2OutlinedIcon fontSize="medium" color="primary" />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
