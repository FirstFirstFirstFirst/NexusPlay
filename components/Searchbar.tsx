import React from "react";

const Searchbar = () => {
  return (
    <div className="flex flex-row gap-4 border border-black p-3 rounded-full w-80">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24"
        height="24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
      Searchbar...
    </div>
  );
};

export default Searchbar;
