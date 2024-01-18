import games from "@/constants/games";
import Image from "next/image";
import React from "react";

const Trending = () => {
  return (
    <div>
      <p className="text-6xl">Trending</p>
      <div className="grid grid-cols-3 gap-4">
        {games.map((game) => (
          <div key={game.id} className="flex flex-col items-center">
            <Image
              src={game.photo}
              alt={game.name}
              width={100}
              height={100}
              className="max-w-full h-auto mb-2"
            />
            <h3 className="text-lg font-bold">{game.name}</h3>
            <p className="text-sm">{game.description}</p>
            <p className="text-sm">Price: ${game.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trending;
