import React from "react";

const Information = () => {
  return (
    <ul className=" rounded-2xl border border-[#E8E8E8] px-6">
      <li className="py-6 flex items-center gap-16">
        <span className=" text-[#808080] font-medium">Contact</span>
        <span className=" font-medium text-black">aghayevmusa@outlook.com</span>
      </li>
      <li className="py-6 flex items-center gap-16 border-y border-y-[#E8E8E8]">
        <span className=" text-[#808080] font-medium">Ship to</span>
        <span className=" font-medium text-black">Ahmadbay Agha oghlu 4</span>
      </li>
      <li className="py-6 flex items-center gap-16">
        <span className=" text-[#808080] font-medium">Method</span>
        <span className=" font-medium text-black">
          Standard (3-5 Business days) · 2 USD
        </span>
      </li>
    </ul>
  );
};

export default Information;
