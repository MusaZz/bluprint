//Icon
import { AiOutlineArrowRight } from "react-icons/ai";

const Button = ({ type }) => {
  return (
    <button
      className=" w-full flex rounded-lg font-black uppercase duration-200 disabled:cursor-not-allowed disabled:bg-[#8E8E8E] disabled:text-white justify-between items-center bg-[#1D1D1D] hover:bg-[#0075FF] text-white text-medium px-4 py-4"
      disabled
    >
      {type === "sign-in" && " Sign In"}
      {type === "sign-up" && " Sign Up"}
      <AiOutlineArrowRight className="fill-white w-5 h-5" />
    </button>
  );
};

export default Button;
