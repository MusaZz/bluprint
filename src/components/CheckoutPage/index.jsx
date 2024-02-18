// Component
import SectionTitle from "../Common/SectionTitle";
import Checkout from "./Checkout";
import Items from "./Items";

// Redux
import { useSelector } from "react-redux";

const CheckoutPage = () => {
  const cartData = useSelector((state) => state.cart);

  const subtotal = cartData.reduce(
    (sum, cartData) => (sum += cartData.counter * cartData.price),
    0
  );

  return (
    <div className=" my-20">
      <div className=" space-y-10">
        <SectionTitle title={`Checkout`} />
        <div className=" grid grid-cols-2 gap-40">
          <Items cartData={cartData} />
          <Checkout subtotal={subtotal} />
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
