// Icons
import { PiShoppingCartBold } from "react-icons/pi";

// Component
import Size from "../ProductsPage/Size";

// Hooks
import { useState } from "react";

const ProductFilter = ({ colorClass, sizes }) => {
  const [selectedSize, setSelectedSize] = useState(null);

  const selectSize = (s) => {
    if (selectedSize === s) {
      setSelectedSize(null);
    } else {
      setSelectedSize(s);
    }
  };

  return (
    <div className="col-span-4">
      <div className="flex flex-col justify-between h-full space-y-28">
        <div className="space-y-10">
          <div className="space-y-2.5">
            <h4 className="text-xs font-bold">Choose your Size</h4>
            <ul className="flex gap-2">
              {sizes.map((size) => (
                <Size
                  size={size.name}
                  key={size.name}
                  disabled={!size.available}
                  click={() => {
                    selectSize(size.name);
                  }}
                  selected={size.name === selectedSize}
                />
              ))}
            </ul>
          </div>
          <div className="space-y-2.5">
            <h4 className="text-xs font-bold">Choose your Color</h4>
            <div className={`w-8 h-8 rounded-full ${colorClass}`}></div>
          </div>
        </div>
        <div className="space-y-10">
          <div className="flex items-center max-w-fit font-black gap-6">
            <button className="text-3xl">-</button>
            <input
              type="number"
              min="1"
              max="100"
              className="border max-w-fit h-14 text-2xl text-center rounded-md"
            />
            <button className="text-3xl">+</button>
          </div>
          <button className="w-full flex rounded-lg font-black uppercase duration-200 disabled:opacity-50 disabled:cursor-not-allowed text-white justify-between items-center bg-[#1D1D1D] hover:bg-[#0075FF]  text-xl px-8 py-6">
            add to cart
            <PiShoppingCartBold className="scale-150" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductFilter;
