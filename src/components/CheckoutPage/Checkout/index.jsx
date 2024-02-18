// Component
import Information from "./Information";
import Discount from "./Discount";

// Image
import YellowLine from "../../../assets/yellow_line.png";

// Icon
import { FaCheckCircle } from "react-icons/fa";

const Checkout = ({ subtotal }) => {
  const shipping = 2;
  return (
    <div className=" flex flex-col gap-8">
      <Information />
      <Discount />

      {/* Subtotal Amount */}
      <ul className=" flex flex-col gap-4 py-8 border-y border-y-[#E8E8E8]">
        <li className=" flex items-center justify-between">
          <span className="text-[#808080] font-medium">Subtotal</span>
          <span className=" font-black text-black">
            {subtotal.toFixed(2)} AZN
          </span>
        </li>
        <li className=" flex items-center justify-between">
          <span className="text-[#808080] font-medium">Shipping</span>
          <span className=" font-black text-black">{shipping} AZN</span>
        </li>
      </ul>

      {/* Total Amount */}
      <ul className="flex items-center justify-between">
        <span className="text-[#808080] font-medium text-2xl">Total</span>
        <div className="relative font-black text-2xl">
          <span className="relative z-10">
            {subtotal > 0 ? subtotal.toFixed(2) : 0 + shipping} AZN
          </span>
          <img
            src={YellowLine}
            alt="line"
            className="absolute top-[15%] scale-150 left-0 w-full"
          />
        </div>
      </ul>

      {/* Confirm Button */}
      <button className=" rounded-lg bg-[#1d1d1d] w-fit flex items-center gap-44 px-[30px] py-[22px]">
        <span className=" uppercase text-white font-black text-xl ">
          confirm order
        </span>
        <FaCheckCircle className=" fill-white" />
      </button>
    </div>
  );
};

export default Checkout;
