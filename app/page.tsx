import GameCasourel from "@/components/GameCasourel";
import Navbar from "@/components/Navbar";
import Trending from "@/components/Trending";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col gap-4 px-10">
      {/* <GameCasourel /> */}
      <Trending />
    </div>
  );
};

export default page;
