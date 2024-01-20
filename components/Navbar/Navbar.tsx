"use client";
import React from "react";
import Login from "./Login";
import Burger from "./Burger";
import SearchBar from "./SearchBar";
import { useRouter } from "next/navigation";
const Navbar = () => {
  const router = useRouter();
  return (
    <div className="w-full h-24 flex flex-row justify-between items-center px-11 text-white bg-black sticky z-50">
      <div
        className="w-1/3 cursor-pointer"
        onClick={() => {
          router.push("/");
        }}
      >
        Logo
      </div>
      <div className="flex flex-row w-2/3 gap-8 justify-end">
        <SearchBar />
        <Login />
        {/* <Burger /> */}
      </div>
    </div>
  );
};

export default Navbar;
