import React from "react";

const Size = ({ title, size }) => {
  return (
    <li
      className="font-bold uppercase bg-gray-200 w-12 h-[30px] flex items-center justify-center cursor-pointer rounded-2xl"
      title={title}
    >
      {size}
    </li>
  );
};

export default Size;
