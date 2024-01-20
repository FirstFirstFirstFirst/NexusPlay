"use client";
import games from "@/constants/games";
import MagniGlass from "./MagniGlass";
import React, { FormEvent, useEffect, useState } from "react";
import { Game } from "@/constants/games";
import Image from "next/image";
import { useRouter } from "next/navigation";
const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const filteredGames = games.filter((game) =>
    game.name.toLowerCase().includes(query.toLowerCase())
  );
  const router = useRouter();
  const handleGameClicked = (id: number) => {
    //to do: function to check is this user logged in or not and check are they bought it or no
    router.push(`/StorePage/Buy/${id}`);
  };
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    console.log(`Searching for: ${query}`);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(`Searching for: ${query}`);
  };

  return (
    <div className="relative">
      <form
        onSubmit={handleSubmit}
        className="flex flex-row gap-4 border border-black p-3 rounded-lg w-96 bg-[#B30000] bg-opacity-50 z-10 relative h-12 items-center"
      >
        <MagniGlass />
        <input
          type="text"
          className="text-white bg-transparent outline-none border-none placeholder-white bg-opacity-0 z-10 w-full"
          placeholder="Search..."
          value={query}
          onChange={handleSearch}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        {isFocused && filteredGames && filteredGames.length > 0 && (
          <div className="absolute w-96 left-0 top-0 mt-[70px] rounded-xl bg-[#B00101]">
            {filteredGames.map((game) => (
              <div
                key={game.id}
                className="p-3 flex flex-row gap-4 items-center justify-start hover:underline cursor-pointer"
                onMouseDown={() => handleGameClicked(game.id)}
              >
                <div className="relative">
                  <Image
                    src={game.photo[0]}
                    alt={"/"}
                    width={50}
                    height={50}
                    className="w-10 h-14 rounded-md object-cover"
                  />
                </div>
                <div className="py-1">{game.name}</div>
              </div>
            ))}
          </div>
        )}
      </form>
    </div>
  );
};

export default SearchBar;
