import React from "react";
interface typeOfButton {
  addtocart: Function;
  obj: {
    id: number;
    name: string;
    type: string;
    price: number;
    game: string;
    photo: string;
  };
}

function Addbutton({ addtocart, obj }: typeOfButton) {
  return (
    <button
      type="button"
      className=" w-[50%] 
             text-white bg-red-700 hover:bg-red-800  font-medium rounded-full text-sm px-5 py-2.5 text-center  "
      onClick={() => {
        addtocart(obj);
      }}
    >
      ADD
    </button>
  );
}

export default Addbutton;
