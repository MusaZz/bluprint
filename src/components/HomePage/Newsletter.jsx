// Icon
import { FiArrowUpRight } from "react-icons/fi";

// Image
import BlueLine from "../../assets/blue_line.png";

const Newsletter = () => {
  return (
    <div className="bg-[#1D1D1D] rounded-xl py-24 text-center space-y-16">
      <div className="text-4xl leading-normal text-white font-medium">
        Don’t miss out and join our monthly
        <br />
        <span>newsletter to know about </span>
        <span className="relative">
          <span className="relative z-10">new arrivals.</span>
          <img
            src={BlueLine}
            className="absolute w-full -left-2 top-6"
            alt="line"
          />
        </span>
      </div>
      <form className="w-1/2 mx-auto">
        <div className="flex items-center relative">
          <input
            className="w-full outline-none border-none p-4 text-xl rounded-lg focus:ring-4 focus:ring-[#0075FF]"
            type="email"
            placeholder="Enter your email address"
          />
          <button className="absolute right-4">
            <FiArrowUpRight className=" scale-200" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Newsletter;
