// Component
import SectionTitle from "../Common/SectionTitle";
import Checkout from "./Checkout";
import Items from "./Items";

// Redux
import { useSelector } from "react-redux";

const CheckoutPage = () => {
  const cartData = useSelector((state) => state.cart);

  return (
    <div className=" my-20">
      <div className=" space-y-10">
        <SectionTitle title={`Checkout`} />
        <div className=" grid grid-cols-2 gap-40">
          <Items cartData={cartData} />
          <Checkout />
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
