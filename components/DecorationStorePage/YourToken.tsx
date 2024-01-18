import React from "react";

function YourToken() {
  return (
    <div className=" flex h-[45%] w-[20%] items-center justify-center bg-white   rounded-full mr-5">
      <div className="flex w-[90%] h-full  items-center justify-between text-black ">
        <div>Your Tokens</div>
        <div className="bg-gray-200 w-[50%] h-full flex justify-center items-center text-red-500">
          <div className=" ">100000000</div>
        </div>
        <div>NXC</div>
      </div>
    </div>
  );
}

export default YourToken;
