import React from "react";

const Size = ({ title, size, click, selected }) => {
  return (
    <li
      onClick={click}
      className={`font-bold uppercase ${
        selected ? "bg-[#1D1D1D] text-white" : "bg-[#E5E5E5] text-black"
      } w-12 h-[30px] flex items-center justify-center cursor-pointer rounded-2xl`}
      title={title}
    >
      {size}
    </li>
  );
};

export default Size;
