"use client";
import React from "react";
import Login from "./Login";
import SearchBar from "./SearchBar";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Logo from "@/public/logo.png";
import ConnectWalletButton from "./ConnectWalletButton";

const Navbar = () => {
  const router = useRouter();
  return (
    <div className="w-full h-24 flex flex-row justify-between items-center px-11 text-white bg-black sticky z-50">
      <div
        className="w-1/3 cursor-pointer relative"
        onClick={() => {
          router.push("/");
        }}
      >
        <Image src={Logo} alt="" width={100} height={100} />
      </div>

      <div className="flex flex-row w-2/3 gap-4 justify-end items-center">
        <SearchBar />
        <Login />
        <ConnectWalletButton />
      </div>
    </div>
  );
};

export default Navbar;
