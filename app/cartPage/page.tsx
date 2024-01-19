import DecorationSummary from "@/components/CartPage/DecorationSummary";
import DecoraionDisplay from "@/components/DecorationStorePage/DecorationPanal";
import YourToken from "@/components/DecorationStorePage/YourToken";
import React from "react";

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
        {/* <div className=" w-full h-[4%] flex text-white justify-between items-center px-10 ">
          <div>Your </div>
     
        </div> */}
        <div className=" flex h-full w-full">
          <div className=" flex h-full w-[70%]">
            <DecoraionDisplay numberOfColumns={3} typeOfbaner={"cart"}  />
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
