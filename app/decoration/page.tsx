"use client";
import Decoraion from "@/components/DecorationStorePage/Decortaion";
import YourToken from "@/components/DecorationStorePage/YourToken";
import decorations from "@/constants/decoration";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface decorationtype {
  id: number;
  name: string;
  type: string;
  price: number;
  game: string;
  photo: string;
}
// ... (previous imports and interfaces)

function Page() {
  const router = useRouter();
  const [Cart, setCart] = useState<decorationtype[]>([]);
  const [NumofCart, setNumofCart] = useState(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State to manage dropdown visibility
  const [selectedType, setSelectedType] = useState<string | null>(null); // State to keep track of the selected type

  function addToCart(decoration: decorationtype) {
    setCart((prevCart) => [...prevCart, decoration]);
    setNumofCart((prevNum) => prevNum + 1);
  }

  const handleCartClick = () => {
    router.push(`/cartPage`);
  };

  const dropdownItems = [
    { id: 1, text: "Profile Icon" },
    { id: 2, text: "Background Profile" },
    { id: 3, text: "sticker" },
    // Add more items as needed
  ];

  const handleDropdownToggle = () => {
    setIsDropdownOpen((prev) => !prev); // Toggle dropdown state
  };

  const handleDropdownSelect = (type: string | null) => {
    setSelectedType(type);
    setIsDropdownOpen(false); // Close the dropdown when an item is selected
  };

  const filteredDecorations = selectedType
    ? decorations.filter((decoration) => decoration.type === selectedType)
    : decorations;

  return (
    <>
      <div className="w-full h-[100rem] relative">
        <div className="px-5 flex h-full w-full flex-col">
          <div className="w-full h-[7%] flex text-white justify-between items-center">
            <div className="flex items-center">
              <div className="h-[80%] w-10">bag logo</div>
              <div className="text-[60px]">Decoration Store</div>
            </div>
            {/* YourToken component */}
          </div>
          <div className="w-full h-[4%] flex text-white justify-between items-center px-10">
            <div className="relative inline-block">
              <button
                onClick={handleDropdownToggle}
                className="text-red-500 bg-white w-[15rem] hover:bg-red-500  focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex justify-between items-center hover:text-white "
                type="button"
              >
                {selectedType ?  selectedType  : "All"}
                <svg
                  className={`w-2.5 h-2.5 ms-3 transform ${
                    isDropdownOpen ? "rotate-180" : ""
                  }`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              <div
                className={`${
                  isDropdownOpen ? "block" : "hidden"
                } absolute z-10 top-full left-0 mt-1   rounded-lg shadow w-[15rem] bg-gray-700 divide-gray-600`}
              >
                <div className="py-2">
                  <a
                    href="#"
                    onClick={() => handleDropdownSelect(null)} // Handle "All" option
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    All
                  </a>
                </div>
                <ul
                  className="py-2 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdownDividerButton"
                >
                  {dropdownItems.map((item) => (
                    <li key={item.id}>
                      <a
                        href="#"
                        onClick={() => handleDropdownSelect(item.text)}
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        {item.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* Cart button */}
            <button
              type="button"
              className="w-[10%] h-10 bg-white text-red-500 hover:bg-red-500 hover:text-white rounded-full relative gap-1 p-2"
              onClick={handleCartClick}
            >
              <div className="text-center w-fit absolute left-[25%] translate-y-[-50%] translate-x-[-50%]">
                I.cart
              </div>
              <div className="h-[70%] border-l border-gray-500 w-fit absolute right-[50%] translate-y-[-50%]"></div>
              <div className="absolute right-[25%] translate-y-[-50%] translate-x-[50%]">
                {NumofCart}
              </div>
            </button>
          </div>
          <div className="h-[80%] w-full bg-white bg-opacity-60 rounded-[20px]">
            <div className="h-auto m-5 grid grid-cols-4 gap-4">
              {filteredDecorations.map((decoration) => (
                <Decoraion
                  btype={"store"}
                  key={decoration.id}
                  decorations={decoration}
                  workfunction={addToCart}
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



