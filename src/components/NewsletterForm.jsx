// Icon
import { FiArrowUpRight } from "react-icons/fi";

const NewsletterForm = ({ page }) => {
  return (
    <form
      className={` ${page === "ProductsPage" ? "w-full" : "w-1/2 mx-auto"}`}
    >
      <div className="flex items-center relative">
        <input
          className={`w-full outline-none border-none ${
            page === "ProductsPage" ? "p-2.5 text-base" : "p-4 text-xl"
          } rounded-lg focus:ring-4 focus:ring-[#0075FF]`}
          type="email"
          placeholder="Your E-mail"
        />
        <button className="absolute right-4">
          <FiArrowUpRight
            className={`${page === "ProductsPage" ? "scale-125" : "scale-200"}`}
          />
        </button>
      </div>
    </form>
  );
};

export default NewsletterForm;
