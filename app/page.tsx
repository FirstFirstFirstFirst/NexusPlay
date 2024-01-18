import GameCasourel from "@/components/GameCasourel";
import Navbar from "@/components/Navbar";
import Trending from "@/components/Trending";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col gap-4 px-10 bg-gradient-to-l from-black to-[#B00101] w-full h-[1840px]">
      {/* <GameCasourel /> */}
      <Trending />
    </div>
  );
};

export default page;
