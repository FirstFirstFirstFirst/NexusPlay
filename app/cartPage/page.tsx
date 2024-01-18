import DecoraionDisplay from "@/components/DecorationStorePage/DecorationPanal";
import YourToken from "@/components/DecorationStorePage/YourToken";
import React from "react";

function page() {
  return (
    <div className=" w-full h-[100rem]">
      {/* Decoration tital  */}
      <div className=" px-5 flex h-full w-full flex-col">
        <div className=" w-full h-[7%] flex text-white justify-between items-center ">
          <div className=" flex items-center">
            <div className="h-[80%] w-10">Return Icon</div>
            <div className="h-[80%] w-10">cart Icon</div>
            <div className=" text-[60px]">Your Cart</div>
          </div>
          <YourToken />
        </div>
        <div className=" w-full h-[4%] flex text-white justify-between items-center px-10 ">
          <div className=" w-[10%] h-10 bg-white text-red-500 rounded-full flex justify-center items-center gap-5 p-2">
            <div className="w-[70%] text-center">All</div>
            <div>Y</div>
          </div>
          <div className=" w-[10%] h-10 bg-white text-red-500 rounded-full flex justify-around items-center gap-1 p-2">
            <div className=" text-center">I.cart</div>
            <div className="h-full border-l border-gray-500"></div>
            <div>100</div>
          </div>
        </div>
        <div className=" flex">
          <div className=" flex w-[70%]">
            <DecoraionDisplay numberOfColumns={3} />
          </div>
          <div className=" w-[30%]  h-[50%] p-10">
            <div className="  bg-white">
              <div className=" text-center font-bold text-xl">
                Decoration Summary
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
