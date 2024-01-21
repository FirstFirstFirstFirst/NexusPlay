"use client";
import { useRouter } from "next/navigation";
import React from "react";

const Login = () => {
  const router = useRouter();
  return (
    <div
      className="flex items-center justify-center border border-black rounded-lg uppercase bg-[#B30000] cursor-pointer transition-all duration-300 hover:bg-[#9c0000] py-3 px-5 h-12"
      onClick={() => {
        router.push(`/loginPage`);
      }}
    >
      Login
    </div>
  );
};

export default Login;
