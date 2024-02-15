//Icons
import { BiWorld } from "react-icons/bi";

// Hook
import { useState } from "react";

const LanguageSwitcher = () => {
  const [language, setLanguage] = useState("en");
  const [showChangeLanguage, setShowChangeLanguage] = useState(false);
  // const languages = ["en", "az"];

  const changeLanguageHandler = () => {
    setShowChangeLanguage(!showChangeLanguage);
  };

  const changeLanguage = () => {
    setLanguage(language === "en" ? "az" : language === "az" ? "en" : "en");
  };
  return (
    <div className=" relative w-20 scale-105">
      <button
        onClick={changeLanguageHandler}
        className={` flex items-center group h-full w-full px-4 py-2 gap-2 ${
          showChangeLanguage ? "rounded-t-md" : "rounded-md"
        } bg-[#1D1D1D]`}
      >
        <BiWorld className=" group-hover:fill-[#FFC700] fill-white" />
        <span className=" group-hover:text-[#FFC700] uppercase text-white">
          {language}
        </span>
      </button>
      {showChangeLanguage && (
        <div className=" absolute bottom-full left-0 w-full top-full">
          <ul>
            <li
              onClick={() => {
                changeLanguageHandler();
                changeLanguage();
              }}
            >
              <span className=" block text-center w-full px-4 text-white hover:text-[#FFC700] py-2 bg-[#1d1d1d] uppercase rounded-b-md ">
                {language === "en" ? "az" : language === "az" ? "en" : null}
              </span>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
