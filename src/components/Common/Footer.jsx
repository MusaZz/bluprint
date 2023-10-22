// Image
import FooterLogo from "../../assets/footer_logo.png";
import FooterNavLink from "./FooterNavLink";
import LanguageSwitcher from "./LanguageSwitcher";

const Footer = () => {
  return (
    <footer className="flex justify-between  border-t border-t-neutral-100 py-10 items-center font-medium">
      <div className="flex items-center gap-12">
        <img src={FooterLogo} alt="logo" />
        <p className=" font-semibold">© 2023 BLU. All Rights Reserved</p>
      </div>
      <div className="flex items-center gap-12">
        <nav>
          <ul className="flex items-center gap-8">
            <FooterNavLink navigation="Privacy Policy" />
            <FooterNavLink navigation="Terms & Conditions" />
            <FooterNavLink navigation="FAQ" />
            <FooterNavLink navigation="Contact Us" />
          </ul>
        </nav>
        <LanguageSwitcher />
      </div>
    </footer>
  );
};

export default Footer;
