import React from "react";

function Decoraion() {
  return (
    <div className=" w-full h-[20rem] bg-white  rounded-[20px] p-4 overflow-auto">
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
          <button
            type="button"
            className=" w-[50%] 
             text-white bg-red-700 hover:bg-red-800  font-medium rounded-full text-sm px-5 py-2.5 text-center  dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
          >
            ADD
          </button>
        </div>
      </div>
    </div>
  );
}

export default Decoraion;
