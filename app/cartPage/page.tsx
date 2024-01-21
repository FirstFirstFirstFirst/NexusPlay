"use client";
import React, { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import DecorationSummary from "@/components/CartPage/DecorationSummary";
import YourToken from "@/components/DecorationStorePage/YourToken";
import Decoraion from "@/components/DecorationStorePage/Decortaion";
import decorations from "@/constants/decoration";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";

interface decorationtype {
  id: number;
  name: string;
  type: string;
  price: number;
  game: string;
  photo: string;
  selected: boolean;
}
function Page() {
  const storedNames =
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("cart") as any)
      : null;
  const [selectAll, setSelectAll] = useState(false);
  const [Cart, setCart] = useState<decorationtype[]>(storedNames || []);
  const [price, setprice] = useState(0);
  const initialDecorations: decorationtype[] = decorations.map(
    (decoration) => ({
      ...decoration,
      selected: false,
    })
  );
  console.log({ Cart });
  const router = useRouter();

  useEffect(() => {
    // Calculate the total price based on selected items
    let totalPrice = 0;
    Cart.forEach((item) => {
      if (selectAll || item.selected) {
        totalPrice += item.price;
      }
    });
    setprice(totalPrice);
  }, [Cart, selectAll]);
  function selectAllItems() {
    const updatedCart = Cart.map((decoration) => ({
      ...decoration,
      selected: !selectAll,
    }));
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setSelectAll(!selectAll);
  }
  function toggleItemSelection(id: number) {
    const updatedCart = Cart.map((decoration) =>
      decoration.id === id
        ? { ...decoration, selected: !decoration.selected }
        : decoration
    );

    // Check if all items are selected to update the "Select All" state
    const allSelected = updatedCart.every((decoration) => decoration.selected);
    setSelectAll(allSelected);

    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  }
  // Use useEffect to run code after the component mounts
  function removeItem(id: number) {
    const updatedCart = Cart.filter((decoration) => decoration.id !== id);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  }
  function checkItem(id: number) {
    const updatedCart = Cart.map((decoration) =>
      decoration.id === id
        ? { ...decoration, selected: !decoration.selected }
        : decoration
    );
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  }

  return (
    <div className=" w-full h-[70rem]">
      <div className=" px-5 flex h-full w-full flex-col">
        <div className=" w-full h-[7%] flex text-white justify-between items-center ">
          <div className=" w-full h-full flex items-center">
            <div className="h-[80%] w-20 text-lg">
              <div className="flex w-full h-full  items-center justify-center">
                <button className=" w-[70%] hover:drop-shadow-2xl rounded-2xl text-[#B30000] bg-white opacity-95 h-[70%]">
                  <FontAwesomeIcon
                    icon={faChevronLeft}
                    className=" h-full hover:drop-shadow-2xl"
                    onClick={() => {
                      router.back();
                    }}
                  />
                </button>
              </div>
            </div>
            <div className="h-[80%] flex justify-center items-center w-20 text-5xl">
              <FontAwesomeIcon icon={faCartShopping} />
            </div>
            <div className=" text-[60px]">Your Cart</div>
          </div>
          <YourToken />
        </div>

        <div className=" flex h-full w-full">
          <div className=" flex h-full w-[70%]">
            <div className=" h-[80%] w-full bg-white bg-opacity-60 rounded-[20px]">
              <div className=" h-[10%] flex flex-row-reverse">
                <div
                  className={`w-[12rem] my-auto text-white drop-shadow-lg mb-1 h-[70%] relative  rounded-l-full  ${
                    selectAll ? "bg-green-500" : "bg-[#B30000]"
                  } cursor-pointer`}
                  onClick={selectAllItems}
                >
                  <input
                    id="disabled-checkbox"
                    checked={selectAll}
                    type="checkbox"
                    value=""
                    className="w-4 h-4 top-[50%] z-[0] left-[25%] absolute translate-y-[-50%] text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  ></input>
                  <div className="top-[50%] left-[50%] absolute translate-y-[-50%] translate-x-[-25%]">
                    {selectAll ? "Unselect All" : "Select All"}
                  </div>
                </div>
              </div>
              <div className={`h-auto m-5 grid  grid-cols-3 gap-4`}>
                {Cart.map((decoration) => (
                  <Decoraion
                    btype={"cart"}
                    key={decoration.id}
                    decorations={decoration}
                    workfunction={removeItem}
                    otherfunstion={toggleItemSelection}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className=" w-[30%]  h-[50%] p-10">
            <DecorationSummary price={price} discount={0} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
