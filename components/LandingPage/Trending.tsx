import games from "@/constants/games";
import Image from "next/image";
import React from "react";

const Trending = () => {
  return (
    <div className="flex flex-col gap-12">
      <p className="text-6xl text-white">Trending</p>
      <div className="grid grid-cols-3 gap-12">
        {games.map((game) => (
          <div
            key={game.id}
            className="flex flex-col items-center xl:w-fit h-auto rounded-xl bg-white"
          >
            <div className="relative">
              <Image
                src={game.photo}
                alt={game.name}
                width={500}
                height={570}
                className="object-cover h-[570px] w-full rounded-t-xl"
              />
            </div>
            <div className="flex flex-col p-6 bg-white rounded-b-xl w-full gap-6">
              <div className="flex flex-row justify-between gap-4">
                <h3 className="text-3xl font-bold w-2/3">{game.name}</h3>
                <p className="text-3xl w-1/3 text-end">${` ${game.price}`}</p>
              </div>
              <p className="text-lg">{game.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trending;
