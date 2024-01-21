"use client";
import { useRouter } from "next/navigation";
import React from "react";

const Decoration = () => {
  const router = useRouter();
  return (
    <div
      className="flex items-center justify-center border border-black rounded-lg uppercase bg-white cursor-pointer transition-all duration-300 py-3 px-5 h-12 text-black"
      onClick={() => {
        router.push(`/decoration`);
      }}
    >
      Decoration
    </div>
  );
};

export default Decoration;
