//Image
import Logo from "../../assets/Logo.png";

//Components
import LanguageSwitcher from "../LanguageSwitcher";

const Header = () => {
  return (
    <header className=" flex items-center gap-10 py-10">
      <a href="#">
        <img src={Logo} alt="logo" className="w-10 h-12 scale-110" />
      </a>
      <LanguageSwitcher />
    </header>
  );
};

export default Header;
