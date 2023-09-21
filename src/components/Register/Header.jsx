//Icons
import { BiWorld } from "react-icons/bi";

//Image
import Logo from "../../assets/Logo.png";

const Header = () => {
  return (
    <header className=" flex items-center gap-10 py-10">
      <a href="#">
        <img src={Logo} alt="logo" className="w-10 h-12 scale-110" />
      </a>
      <div className="relative w-20 scale-105">
        <button className=" flex items-center lang-switcher h-full w-full px-4 py-2 gap-2 rounded-md bg-[#1D1D1D]">
          <BiWorld className="fill-white" />
          <span className=" uppercase text-white">EN</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
