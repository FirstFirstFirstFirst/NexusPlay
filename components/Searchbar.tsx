import React from "react";
import MagniGlass from "./MagniGlass";

const Searchbar = () => {
  return (
    <div className="flex flex-row gap-4 border border-black p-3 rounded-full w-96 bg-[#B30000] bg-opacity-50">
      <MagniGlass />
      <p className="text-white">Searchbar...</p>
    </div>
  );
};

export default Searchbar;
