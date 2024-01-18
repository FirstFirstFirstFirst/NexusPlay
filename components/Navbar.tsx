import React from "react";
import Searchbar from "./Searchbar";
import Login from "./Login";
import Burger from "./Burger";

const Navbar = () => {
  return (
    <div className="w-full h-24 flex flex-row justify-between items-center">
      <div>Logo</div>
      <div className="flex flex-row w-full">
        <Searchbar />
        <Login />
        <Burger />
      </div>
    </div>
  );
};

export default Navbar;
