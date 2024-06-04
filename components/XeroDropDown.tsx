import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Link from "next/link";
import { handleLogout } from "@/controller/appwrite";

export default function XeroDropDown() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="demo-positioned-button"
        aria-controls={open ? "demo-positioned-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        XeroCodee <ExpandMoreIcon />
      </Button>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <MenuItem onClick={handleClose}>
          {" "}
          <Link href={"/auth/signup"}> Sign UP</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link href={"/ob1"}>OnBoarding Page 1</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link href={"/ob2"}> OnBoarding Page 2 </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}> <button onClick={() => handleLogout() } >Logout</button></MenuItem>
      </Menu>
    </div>
  );
}
