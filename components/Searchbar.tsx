"use client";
import MagniGlass from "./MagniGlass";
import React, { FormEvent, useEffect, useState } from "react";

const SearchBar = () => {
  const [query, setQuery] = useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    console.log(`Searching for: ${query}`);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(`Searching for: ${query}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-row gap-4 border border-black p-3 rounded-full w-96 bg-[#B30000] bg-opacity-50"
    >
      <MagniGlass />
      <input
        type="text"
        className="text-white bg-white bg-opacity-0"
        placeholder="Search..."
        value={query}
        onChange={handleSearch}
      />
    </form>
  );
};

export default SearchBar;
