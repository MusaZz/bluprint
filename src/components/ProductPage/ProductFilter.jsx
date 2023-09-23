//Icons
import { PiShoppingCartBold } from "react-icons/pi";

const ProductFilter = () => {
  return (
    <div className="col-span-4">
      <div className="flex flex-col justify-between h-full space-y-28">
        <div className="space-y-10">
          <div className="space-y-2.5">
            <h4 className="text-xs font-bold">Choose your Size</h4>
            <ul className="flex gap-2">
              <li className="font-bold uppercase  w-12 h-[30px] flex items-center justify-center bg-gray-200 cursor-pointer rounded-2xl">
                xs
              </li>
              <li className="font-bold uppercase  w-12 h-[30px] flex items-center justify-center bg-gray-200 cursor-pointer rounded-2xl">
                s
              </li>
              <li className="font-bold uppercase  w-12 h-[30px] flex items-center justify-center bg-gray-200 cursor-pointer rounded-2xl">
                m
              </li>
              <li className="font-bold uppercase  w-12 h-[30px] flex items-center justify-center bg-gray-200 cursor-pointer rounded-2xl">
                l
              </li>
              <li className="font-bold uppercase  w-12 h-[30px] flex items-center justify-center bg-gray-200 cursor-pointer rounded-2xl">
                xl
              </li>
            </ul>
          </div>
          <div className="space-y-2.5">
            <h4 className="text-xs font-bold">Choose your Color</h4>
            <div className="w-8 h-8 rounded-full bg-[#FB923C]"></div>
          </div>
        </div>
        <div className="space-y-10">
          <div className="flex items-center max-w-fit  font-black gap-6">
            <button className="text-3xl">-</button>
            <input
              type="number"
              value="1"
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
