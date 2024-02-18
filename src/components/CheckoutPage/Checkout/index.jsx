import React from "react";
import Information from "./Information";
import Discount from "./Discount";

const Checkout = ({ subtotal }) => {
  return (
    <div className=" flex flex-col gap-8">
      <Information />
      <Discount />
      <ul className=" flex flex-col gap-4 py-8 border-y border-y-[#E8E8E8]">
        <li className=" flex items-center justify-between">
          <span className="text-[#808080] font-medium">Subtotal</span>
          <span className=" font-black text-black">
            {subtotal.toFixed(2)} AZN
          </span>
        </li>
        <li className=" flex items-center justify-between">
          <span className="text-[#808080] font-medium">Shipping</span>
          <span className=" font-black text-black">2 USD</span>
        </li>
      </ul>
    </div>
  );
};

export default Checkout;
