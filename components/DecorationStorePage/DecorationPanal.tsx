import React from "react";
import Decoraion from "./Decortaion";
import decorations from "@/constants/decoration";
interface DecorationDisplayProps {
  numberOfColumns: number;
  typeOfbaner: string;
}

function DecoraionDisplay({
  numberOfColumns,
  typeOfbaner,
}: DecorationDisplayProps) {
  return (
    <div className=" h-[80%] w-full bg-white bg-opacity-60 rounded-[20px]">
      <div className={`h-auto m-5 grid grid-cols-${numberOfColumns} gap-4`}>
        {decorations.map((decoration) => (
          <Decoraion
            key={decoration.id}
            id={decoration.id}
            name={decoration.name}
            type={decoration.type}
            price={decoration.price}
            photo={decoration.photo}
            btype={typeOfbaner}
            game={decoration.game}
          />
        ))}
      </div>
    </div>
  );
}

export default DecoraionDisplay;
