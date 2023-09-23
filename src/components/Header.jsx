//Icons
import { BiWorld } from "react-icons/bi";

//Image
import Logo from "../assets/Logo.png";

//Components
import LanguageSwitcher from "./LanguageSwitcher";
import NavLink from "./NavLink";

//Icons
import { PiShoppingCartBold } from "react-icons/pi";
import { FiSearch } from "react-icons/fi";

//React Router
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex justify-between py-10">
      <Link to="/">
        <img src={Logo} alt="logo" className="w-10 h-12 scale-110" />
      </Link>
      <nav>
        <ul className="h-full flex gap-20">
          <Link to="/products">
            <NavLink link="Products" />
          </Link>
          <Link>
            <NavLink link="Collections" />
          </Link>
          <Link>
            <NavLink link="Account" />
          </Link>
          <Link>
            <NavLink link="Help" dropdown />
          </Link>
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
