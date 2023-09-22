import React from "react";

const Category = ({ category, click, selected }) => {
  return (
    <li onClick={click} className={`cursor-pointer  text-black  ${selected && "font-black"} `}>
      {category}
    </li>
  );
};

export default Category;
