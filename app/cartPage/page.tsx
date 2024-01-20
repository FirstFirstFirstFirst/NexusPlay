"use client";
import DecorationSummary from "@/components/CartPage/DecorationSummary";
import YourToken from "@/components/DecorationStorePage/YourToken";
import React from "react";
import Decoraion from "@/components/DecorationStorePage/Decortaion";
import decorations from "@/constants/decoration";
function page() {
  return (
    <div className=" w-full h-[70rem]">
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

        <div className=" flex h-full w-full">
          <div className=" flex h-full w-[70%]">
            <div className=" h-[80%] w-full bg-white bg-opacity-60 rounded-[20px]">
              <div className={`h-auto m-5 grid grid-cols-3 gap-4`}>
                {/* {decorations.map((decoration) => (
                  // <Decoraion
                  //   btype={"cart"}
                  //   key={decoration.id}
                  //   decorations={decoration}
                  // />
                ))} */}
              </div>
            </div>
          </div>
          <div className=" w-[30%]  h-[50%] p-10">
            <DecorationSummary />
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
