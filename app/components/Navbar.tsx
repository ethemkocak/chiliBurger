import Link from "next/link";
import React from "react";
import { Icon } from "@iconify/react";

const Navbar = () => {
  return (
    <div className="bg-[#28282B] border text-white flex h-20 w-full items-center">
      <Link
        href={"/"}
        className="text-white custom-font1 text-3xl flex ml-11 gap-2"
      >
        <Icon icon="stash:burger-light" width="48" height="48" />
        Chili Burger
      </Link>

      <div className="flex gap-14 ml-auto mr-64 custom-font1">
        <Link href={"/"}>HOME</Link>
        <Link href={"/menu"}>MENU</Link>
        <Link href={"/about"}>ABOUT</Link>
        <div>SHOP</div>
      </div>
    </div>
  );
};

export default Navbar;
