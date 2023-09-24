// Image
import BlueLine from "./../assets/blue_line.png";

// Components
import NewsletterForm from "./NewsletterForm";

const Newsletter = ({ page }) => {
  return (
    <div
      className={`
      ${
        page === "ProductsPage" &&
        "bg-[#FFC700] rounded-2xl w-full p-5 pb-8 flex gap-5 flex-col"
      }
      ${
        page === "HomePage" &&
        "bg-[#1D1D1D] rounded-xl py-24 text-center space-y-16"
      }`}
    >
      {page === "ProductsPage" && (
        <h3 className="text-[#1D1D1D] text-[22px] font-bold leading-9">
          Join our newsletter and don’t miss new arrivals.
        </h3>
      )}
      {page === "HomePage" && (
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
      )}
      <NewsletterForm page={page} />
    </div>
  );
};

export default Newsletter;
