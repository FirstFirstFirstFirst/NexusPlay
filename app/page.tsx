import GameCasourel from "@/components/LandingPage/GameCasourel";

import Trending from "@/components/LandingPage/Trending";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col gap-12 px-20 bg-gradient-to-l from-black to-[#B00101] w-full h-full my-24">
      <GameCasourel />
      <Trending />
    </div>
  );
};

export default page;
