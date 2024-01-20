import React from "react";
import Addbutton from "./Addbutton";
import RemoveButton from "./RemoveButton";
interface DecorationDisplayProps {
  decorations: {
    id: number;
    name: string;
    type: string;
    price: number;
    game: string;
    photo: string;
    selected?: boolean; // New property to track selection
  };

  btype: string;
  workfunction: Function;
  otherfunstion?: Function;
}
function Decoraion({
  decorations,
  btype,
  workfunction,
  otherfunstion,
}: DecorationDisplayProps) {
  if (btype === "store") {
    return (
      <div className=" w-full h-[20rem] bg-white drop-shadow-xl  rounded-[20px] p-4 overflow-auto">
        <div className="h-[65%] bg-[#D9D9D9]  rounded-[16px] flex justify-center items-center ">
          <div>image</div>
        </div>
        <div className="h-[35%] p-2  flex  ">
          <div className="h-full w-[50%] flex  flex-col justify-around">
            <div className="text-xl">{decorations.name}</div>
            <div>{decorations.type}</div>
            <div>{decorations.game}</div>
          </div>
          <div className="w-[50%]  flex flex-col justify-between items-center">
            <div className="pt-2">
              <span>{decorations.price} NXC</span>
            </div>
            <Addbutton addtocart={workfunction} obj={decorations} />
          </div>
        </div>
      </div>
    );
  } else if (btype === "cart") {
    return (
      <div className=" w-full h-[20rem] bg-white drop-shadow-xl  rounded-[20px] p-4 overflow-auto">
        <div className="h-[65%] bg-[#D9D9D9]  rounded-[16px] flex justify-center items-center ">
          <div>image</div>
        </div>
        <div className="h-[35%] p-2  flex  ">
          <div className="h-full w-[50%] flex  flex-col justify-around">
            <div className="text-xl">{decorations.name}</div>
            <div>{decorations.type}</div>
            <div>{decorations.game}</div>
          </div>
          <div className="w-[50%]  flex flex-col justify-between items-center">
            <div className="pt-2">
              <span>{decorations.price} NXC</span>
            </div>
            <div className="flex justify-between">
              <button
                type="button"
                className="w-[85%] 
             text-white bg-red-700 flex items-center gap-3 hover:bg-red-800  font-medium rounded-full text-sm px-5 py-2.5 text-center  "
                onClick={() => {
                  otherfunstion!(decorations.id);
                }}
              >
                <input
                  type="checkbox"
                  checked={decorations.selected}
                  // onChange={() => otherfunstion!(decorations.id)}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <p>Select</p>
              </button>

              <RemoveButton id={decorations.id} workfunction={workfunction} />
            </div>
          </div>
        </div>
      </div>
    );
  }
  return <div>Plese enter the type </div>;
}

export default Decoraion;
