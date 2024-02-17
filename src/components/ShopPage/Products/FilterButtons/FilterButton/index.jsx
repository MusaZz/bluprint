// Icon
import { FaXmark } from "react-icons/fa6";

const FilterButton = ({ filter, click }) => {
  return (
    <li
      onClick={click}
      className=" cursor-pointer flex gap-1 bg-[#1d1d1d] px-3 py-1 items-center rounded-md text-sm text-white"
    >
      <FaXmark className=" text-white" />
      <span className="text-white">{filter}</span>
    </li>
  );
};

export default FilterButton;
