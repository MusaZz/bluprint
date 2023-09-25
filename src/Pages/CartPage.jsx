// Components
import SectionTitle from "../components/SectionTitle";

// Image
import Empty from "../assets/empty_box.png";

const CartPage = () => {
  return (
    <div className="my-20">
      <div className="space-y-10">
        <SectionTitle title="Cart" />
        <div className="border-y border-neutral-100 py-10">
          <div className="flex items-center justify-center flex-col space-y-8 w-full h-full">
            <img src={Empty} alt="empty_box" />
            <div className="text-center space-y-2 5">
              <h2 className="text-3xl font-black">
                Your cart is empty<span className="text-[#FFC700]">.</span>
              </h2>
              <p className="font-medium text-neutral-400 w-2/3 mx-auto px-10">
                You have no items in your shopping cart. To add an item, click
                the “Add to cart” button on the product page.
              </p>
            </div>
            <span className="cursor-pointer flex rounded-lg font-black uppercase duration-200 justify-center bg-[#1D1D1D] hover:bg-[#0075FF] text-white px-4 py-3">
              Browse products
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
