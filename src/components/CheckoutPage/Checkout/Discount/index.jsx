// Icon
import { BiSolidDiscount } from "react-icons/bi";

const Discount = () => {
  return (
    <div className=" flex items-center gap-6 py-8 border-y border-y-[#E8E8E8]">
      <input
        className=" w-full border border-[#E8E8E8] rounded-lg p-4 placeholder:text-[#808080] text-[#1d1d1d] font-medium"
        type="text"
        placeholder="Gift card or discount code"
      />
      <button
        className=" rounded-lg bg-[#1d1d1d] disabled:bg-[#8E8E8E] p-4 border border-[#8E8E8E] flex items-center gap-16 disabled:cursor-not-allowed cursor-pointer"
        disabled={true}
      >
        <span className=" uppercase text-white font-black">apply</span>
        <BiSolidDiscount className=" w-6 h-6 fill-white" />
      </button>
    </div>
  );
};

export default Discount;
