import React from "react";
import Checkout from "../DecorationStorePage/Checkout";
interface inputprice{
  price: number;
  discount : number
  
}
function DecorationSummary({price, discount}:inputprice) {
  return (
    <div className="bg-white flex flex-col items-center gap-3 p-5 rounded-[20px]">
      <div className="text-center font-bold text-3xl">Decoration Summary</div>
      <div className="flex justify-between mx-10 text-2xl w-[70%]">
        <div>Price</div>
        <div className="flex gap-5">
          <div>{price}</div>
          <div>NXC</div>
        </div>
      </div>
      <div className=" flex justify-between mx-10 text-2xl w-[70%]">
        <div>Discount</div>
        <div className="flex gap-5">
          {discount ? <div>-{discount}</div> : <div>{discount}</div>}
          <div>NXC</div>
        </div>
      </div>
      <div className=" flex justify-between mx-10 text-2xl w-[70%]">
        <div>Total</div>
        <div className="flex gap-5">
          <div>0</div>
          <div>NXC</div>
        </div>
      </div>
      <div className="h-20 w-full flex justify-center items-center">
        <div className="w-[70%] h-[60%]   ">
          <Checkout />
        </div>
      </div>
    </div>
  );
}

export default DecorationSummary;
