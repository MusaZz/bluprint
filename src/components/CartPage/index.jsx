// Components
import SectionTitle from "../Common/SectionTitle";
import Items from "./Items";
import EmptyBox from "../../components/Common/EmptyBox";
import Button from "../../components/HomePage/Button";

// Image
import YellowLine from "../../assets/yellow_line.png";

// Redux
import { useSelector } from "react-redux";

// Hooks
import { useState } from "react";
import DeleteModal from "../../components/CartPage/DeleteModal";

const CartPage = () => {
  const [wantDelete, setWantDelete] = useState(false);

  const cartData = useSelector((state) => state.cart);

  const subtotal = cartData.reduce(
    (sum, cartData) => (sum += cartData.counter * cartData.price),
    0
  );

  return (
    <div className="my-20">
      <div className="space-y-10">
        <SectionTitle title="Cart" />
        <div className="border-y border-neutral-100 py-10">
          {cartData.length ? (
            <Items setWantDelete={setWantDelete} cartData={cartData} />
          ) : (
            <EmptyBox />
          )}
        </div>
        {cartData.length ? (
          <div className="flex justify-between space-y-0 items-center pb-10">
            <div className="flex gap-2">
              <span className="font-medium text-4xl">Subtotal:</span>
              <div className="relative font-black text-4xl">
                <span className="relative z-10">{subtotal.toFixed(2)} AZN</span>
                <img
                  src={YellowLine}
                  alt="line"
                  className="absolute -top-1/4 left-0 w-full"
                />
              </div>
            </div>
            <Button title="place your order" section="cart" />
          </div>
        ) : null}
      </div>

      {wantDelete && <DeleteModal setWantDelete={setWantDelete} />}
    </div>
  );
};

export default CartPage;
