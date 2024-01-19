import React from "react";
import Addbutton from "./Addbutton";
import RemoveButton from "./RemoveButton";
interface DecorationDisplayProps {
  id: number;
  name: string;
  type: string;
  price: number;
  game: string;
  photo: string;
  btype: string;
}
function Decoraion({
  id,
  name,
  type,
  price,
  game,
  photo,
  btype,
}: DecorationDisplayProps) {
  if (btype === "store") {
    return (
      
      <div className=" w-full h-[20rem] bg-white drop-shadow-xl  rounded-[20px] p-4 overflow-auto">
      <div className="h-[65%] bg-[#D9D9D9]  rounded-[16px] flex justify-center items-center ">
      <div>image</div>
      </div>
      <div className="h-[35%] p-2  flex  ">
        <div className="h-full w-[50%] flex  flex-col justify-around">
        <div className="text-xl">{name}</div>
          <div>{type}</div>
          <div>{game}</div>
          </div>
          <div className="w-[50%]  flex flex-col justify-between items-center">
          <div className="pt-2">
          <span>{price} NXC</span>
          </div>
          <Addbutton />
          </div>
      </div>
    </div>
    )
  }
  else if (btype === "cart") {
     return (
    <div className=" w-full h-[20rem] bg-white drop-shadow-xl  rounded-[20px] p-4 overflow-auto">
      <div className="h-[65%] bg-[#D9D9D9]  rounded-[16px] flex justify-center items-center ">
        <div>image</div>
      </div>
      <div className="h-[35%] p-2  flex  ">
        <div className="h-full w-[50%] flex  flex-col justify-around">
          <div className="text-xl">{name}</div>
          <div>{type}</div>
          <div>{game}</div>
        </div>
        <div className="w-[50%]  flex flex-col justify-between items-center">
          <div className="pt-2">
            <span>{price} NXC</span>
          </div>
          <RemoveButton />
        </div>
      </div>
    </div>)
  }
  return (
    <div>Plese enter the type </div>
  );
}

export default Decoraion;
