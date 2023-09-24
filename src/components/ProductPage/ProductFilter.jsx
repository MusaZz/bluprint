// Icons
import { PiShoppingCartBold } from "react-icons/pi";

// Component
import Size from "../ProductsPage/Size";

// Hooks
import { useRef } from "react";

//Redux
import { useSelector, useDispatch } from "react-redux";
import { productActions } from "../../redux/slices/productSlice";

const ProductFilter = ({ colorClass, sizes }) => {
  const { size, counter } = useSelector((state) => state.product);
  const inputRef = useRef();
  const dispatch = useDispatch();

  const selectSize = (s) => {
    dispatch(productActions.selectSize(s));
  };

  const increment = () => {
    dispatch(productActions.increase());
  };

  const decrement = () => {
    dispatch(productActions.decrease());
  };

  const setCounter = () => {
    dispatch(productActions.setCounter(inputRef.current.value));
  };

  return (
    <div className="col-span-4">
      <div className="flex flex-col justify-between h-full space-y-28">
        <div className="space-y-10">
          <div className="space-y-2.5">
            <h4 className="text-xs font-bold">Choose your Size</h4>
            <ul className="flex gap-2">
              {sizes.map((s) => (
                <Size
                  size={s.name}
                  key={s.name}
                  disabled={!s.available}
                  click={() => {
                    selectSize(s.name);
                  }}
                  selected={s.name === size}
                />
              ))}
            </ul>
          </div>
          <div className="space-y-2.5">
            <h4 className="text-xs font-bold">Choose your Color</h4>
            <div className={`w-8 h-8 rounded-full ${colorClass}`}></div>
          </div>
        </div>
        <div className="space-y-10">
          <div className="flex items-center max-w-fit font-black gap-6">
            <button className="text-3xl" onClick={decrement}>
              -
            </button>
            <input
              ref={inputRef}
              onChange={setCounter}
              value={counter}
              type="number"
              min="1"
              max="100"
              className="border max-w-fit h-14 text-2xl text-center rounded-md"
            />
            <button className="text-3xl" onClick={increment}>
              +
            </button>
          </div>
          <button className="w-full flex rounded-lg font-black uppercase duration-200 disabled:opacity-50 disabled:cursor-not-allowed text-white justify-between items-center bg-[#1D1D1D] hover:bg-[#0075FF]  text-xl px-8 py-6">
            add to cart
            <PiShoppingCartBold className="scale-150" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductFilter;
