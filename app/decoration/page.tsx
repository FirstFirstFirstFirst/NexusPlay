"use client";
import Decoraion from "@/components/DecorationStorePage/Decortaion";
import YourToken from "@/components/DecorationStorePage/YourToken";
import decorations from "@/constants/decoration";
import { useState } from "react";

interface decorationtype {
  id: number;
  name: string;
  type: string;
  price: number;
  game: string;
  photo: string;
}
function Page() {
  const [Cart, setCart] = useState<decorationtype[]>([]);

  function addToCart(decoration: decorationtype) {
    if (Cart?.length != 0) {
      const newCart = [...Cart, decoration];
      setCart(newCart);
      
    } else {
      Cart.push(decoration)
    }

  }
  return (
    <>
      <div className=" w-full h-[100rem]">
        {/* Decoration tital  */}
        <div className=" px-5 flex h-full w-full flex-col">
          <div className=" w-full h-[7%] flex text-white justify-between items-center ">
            <div className=" flex items-center">
              <div className="h-[80%] w-10">bag logo</div>
              <div className=" text-[60px]">Decoration Store</div>
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
          <div className=" h-[80%] w-full bg-white bg-opacity-60 rounded-[20px]">
            <div className="h-auto  m-5 grid grid-cols-4 gap-4">
              {decorations.map((decoration) => (
                <Decoraion
                  btype={"store"}
                  key={decoration.id}
                  decorations={decoration}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;
