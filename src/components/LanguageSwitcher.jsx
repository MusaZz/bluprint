//Icons
import { BiWorld } from "react-icons/bi";

const LanguageSwitcher = () => {
  return (
    <div className="w-20 scale-105">
      <button className=" flex items-center h-full w-full px-4 py-2 gap-2 rounded-md bg-[#1D1D1D]">
        <BiWorld className="fill-white" />
        <span className=" uppercase text-white">EN</span>
      </button>
    </div>
  );
};

export default LanguageSwitcher;
