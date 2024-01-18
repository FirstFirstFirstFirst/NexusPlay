import React from "react";
import Addbutton from "./Addbutton";

function Decoraion() {
  return (
    <div className=" w-full h-[20rem] bg-white drop-shadow-xl  rounded-[20px] p-4 overflow-auto">
      <div className="h-[65%] bg-[#D9D9D9]  rounded-[16px] flex justify-center items-center ">
        <div>image</div>
      </div>
      <div className="h-[35%] p-2  flex  ">
        <div className="h-full w-[50%] flex  flex-col justify-around">
          <div className="text-xl">Yasuo profile</div>
          <div>Profile Icon</div>
          <div>League of Legends</div>
        </div>
        <div className="w-[50%]  flex flex-col justify-between items-center">
          <div className="pt-2">
            <span>1,000 NXC</span>
          </div>
          <Addbutton />
        </div>
      </div>
    </div>
  );
}

export default Decoraion;
