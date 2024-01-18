import React from "react";
import Searchbar from "./Searchbar";
import Login from "./Login";

const Navbar = () => {
  return (
    <div className="w-full h-24">
      <div>Logo</div>
      <Searchbar />
      <Login />
      <div>Burger</div>
    </div>
  );
};

export default Navbar;
