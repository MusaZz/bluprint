//Image
import Logo from "../../assets/Logo.png";

//Components
import LanguageSwitcher from "./LanguageSwitcher";
import NavLink from "./NavLink";

//Icons
import { PiShoppingCartBold } from "react-icons/pi";
import { FiSearch } from "react-icons/fi";

//React Router
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";

const Header = () => {
  const cart = useSelector((state) => state.cart);

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
        <Link to="/cart">
          <span
            className={` ${
              cart.length > 0 && "ring-4 ring-[#FEC700]"
            } relative bg-[#1D1D1D] scale-105 w-12 h-12 flex items-center justify-center rounded-md`}
          >
            <PiShoppingCartBold className="  fill-white scale-125" />
            {cart.length > 0 && (
              <span className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 w-6 h-6 text-sm flex items-center justify-center">
                <span className=" animation-duration absolute top-0 left-0 w-full h-full bg-[#FEC700] rounded-lg animate-spin"></span>
                <span className="relative z-10 font-black text-[#1d1d1d]">
                  {cart.length}
                </span>
              </span>
            )}
          </span>
        </Link>
        <button className="bg-[#1D1D1D] scale-105 w-12 h-12  flex items-center justify-center rounded-md">
          <FiSearch className="stroke-white scale-125 " />
        </button>
      </div>
    </div>
  );
};

export default Header;
