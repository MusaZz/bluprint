import React from "react";

const Category = ({category}) => {
  return (
    <li
      className={`cursor-pointer  text-black `}
    >
      {category}
    </li>
  );
};

export default Category;
