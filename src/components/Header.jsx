//Icons
import { BiWorld } from "react-icons/bi";

//Image
import Logo from "../assets/Logo.png";

//Components
import LanguageSwitcher from "./LanguageSwitcher";

//Icons
import { PiShoppingCartBold } from "react-icons/pi";
import { FiSearch } from "react-icons/fi";

const Header = () => {
  return (
    <div className="flex justify-between py-10">
      <a href="#">
        <img src={Logo} alt="logo" className="w-10 h-12 scale-110" />
      </a>
      <nav>
        <ul className="h-full flex gap-20">
          <li className="h-full flex items-center">
            <a href="#" className="text-3xl font-black">
              Products<span className=" text-[#FFC700]">.</span>
            </a>
          </li>
          <li className="h-full flex items-center">
            <a href="#" className="text-3xl font-black">
              Collections<span className=" text-[#FFC700]">.</span>
            </a>
          </li>
          <li className="h-full flex items-center">
            <a href="#" className="text-3xl font-black">
              Account<span className=" text-[#FFC700]">.</span>
            </a>
          </li>
          <li className="h-full flex items-center">
            <a href="#" className="text-3xl font-black">
              Help<span className=" text-[#FFC700]">.</span>
            </a>
          </li>
        </ul>
      </nav>
      <div className="flex gap-5">
        <LanguageSwitcher />
        <a
          href="#"
          className="bg-[#1D1D1D] scale-105 w-12 h-12 flex items-center justify-center rounded-md"
        >
          <PiShoppingCartBold className="  fill-white scale-125" />
        </a>
        <button className="bg-[#1D1D1D] scale-105 w-12 h-12  flex items-center justify-center rounded-md">
          <FiSearch className="stroke-white scale-125 " />
        </button>
      </div>
    </div>
  );
};

export default Header;
