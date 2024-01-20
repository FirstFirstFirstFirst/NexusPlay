"use client";
import { useRouter } from "next/navigation";
import React from "react";

const Login = () => {
  const router = useRouter();
  return (
    <div
      className="w-32
  flex items-center justify-center border border-black rounded-full uppercase bg-[#B30000] cursor-pointer"
      onClick={() => {
        router.push(`/LoginPage`);
      }}
    >
      Login
    </div>
  );
};

export default Login;
