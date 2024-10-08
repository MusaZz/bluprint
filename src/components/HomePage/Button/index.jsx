// Icons
import { AiOutlineArrowRight } from "react-icons/ai";

// Router
import { Link } from "react-router-dom";

const Button = ({ section, title }) => {
  return (
    <Link
      to={
        title === "See All Products"
          ? "/shop"
          : section === "cart"
          ? "/checkout"
          : null
      }
    >
      <span
        className={` group flex gap-4 rounded-lg font-black uppercase duration-200 justify-between items-center text-xl px-8 py-6 ${
          section === "collections"
            ? "w-full bg-[#FFC700] hover:bg-[#1D1D1D] text-black hover:text-white"
            : section === "cart"
            ? "w-full bg-[#1D1D1D] hover:bg-[#0075FF] text-white"
            : "w-1/2 bg-[#1D1D1D] hover:bg-[#0075FF] text-white"
        }`}
      >
        {title}
        <AiOutlineArrowRight
          className={
            section === "collections"
              ? "fill-black group-hover:fill-white"
              : "fill-white"
          }
        />
      </span>
    </Link>
  );
};

export default Button;
