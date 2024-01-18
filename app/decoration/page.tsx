import YourToken from "@/components/YourToken";
import React from "react";

function page() {
  return (
    <>
      <div className=" w-full h-[100rem] bg-gradient-to-r from-[#B30000] to-black">
        {/* Decoration tital  */}
        <div className=" p-5 flex h-[10%] w-full flex-col">
          <div className=" w-full h-full flex text-white justify-between items-center ">
            <div className=" flex items-center  ">
              <div className="h-[80%] w-10">pag logo</div>
              <div className=" text-[60px]">Decoraion Store</div>
            </div>
            <YourToken />
          </div>
          <div className=" w-full h-[10%] flex text-white justify-between items-center ">
            <div className=" w-[5%] bg-white text-red-500 rounded-full">
              <div>All</div>
              <div></div>
            </div>
            <div>cart</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default page;
