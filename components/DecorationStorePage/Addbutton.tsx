import { useState } from "react";

interface TypeOfButton {
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

function AddButton({ addtocart, obj }: TypeOfButton) {
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    addtocart(obj);
    setAdded(true);
  };

  return (
    <button
      type="button"
      className={`w-[50%] text-white font-medium rounded-full text-sm px-5 py-2.5 text-center ${
        added ? "bg-gray-500 cursor-not-allowed" : "bg-red-700 hover:bg-red-800"
      }`}
      onClick={added ? undefined : handleAddToCart}
    >
      {added ? "Added" : "ADD"}
    </button>
  );
}

export default AddButton;
