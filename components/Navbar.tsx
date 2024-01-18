import React from "react";
import Searchbar from "./Searchbar";
import Login from "./Login";
import Burger from "./Burger";

const Navbar = () => {
  return (
    <div className="w-full h-24 flex flex-row justify-between items-center px-11 text-white bg-black">
      <div className="w-1/3">Logo</div>
      <div className="flex flex-row w-2/3 gap-8 justify-end">
        <Searchbar />
        <Login />
        <Burger />
      </div>
    </div>
  );
};

export default Navbar;
