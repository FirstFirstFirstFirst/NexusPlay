import React from "react";
import Searchbar from "./Searchbar";
import Login from "./Login";

const Navbar = () => {
  return (
    <div className="w-full h-24 flex flex-row justify-between items-center">
      <div>Logo</div>
      <div className="flex flex-row w-full">
        <Searchbar />
        <Login />
        <div>Burger</div>
      </div>
    </div>
  );
};

export default Navbar;
