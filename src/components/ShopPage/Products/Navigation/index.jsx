// Icon
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

const Navigation = () => {
  return (
    <div className=" flex items-center gap-10 justify-center">
      <FaChevronLeft />
      <ul className=" flex items-center gap-10">
        <li className=" cursor-pointer w-10 h-10 rounded-[5px] bg-[#1D1D1D] grid place-items-center">
          <span className=" text-white font-bold">1</span>
        </li>
        <li className=" cursor-pointer w-10 h-10 rounded-[5px] border border-transparent hover:border-[#1D1D1D] duration-200 ease-linear grid place-items-center">
          <span className=" text-black font-bold">2</span>
        </li>
        <li className=" cursor-pointer w-10 h-10 rounded-[5px] border border-transparent hover:border-[#1D1D1D] duration-200 ease-linear  grid place-items-center">
          <span className=" text-black font-bold">3</span>
        </li>
        <li>
          <span className=" text-black font-bold">...</span>
        </li>
      </ul>
      <FaChevronRight />
    </div>
  );
};

export default Navigation;
