//Image
import Logo from "../../assets/Logo.png";

//Components
import LanguageSwitcher from "../Common/LanguageSwitcher";

// Router
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className=" flex items-center gap-10 py-10">
      <Link to="/">
        <img src={Logo} alt="logo" className="w-10 h-12 scale-110" />
      </Link>
      <LanguageSwitcher />
    </header>
  );
};

export default Header;
