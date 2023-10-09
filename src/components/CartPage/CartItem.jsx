// Icon
import { AiFillMinusCircle } from "react-icons/ai";

// Hooks
import { useState, useEffect, useRef } from "react";

// Redux
import { cartActions } from "../../redux/slices/cartSlice";
import store from "../../redux/store";

const CartItem = ({
  name,
  category,
  image,
  price,
  size,
  color,
  counter,
  id,
}) => {
  let colorClass = `bg-${color}-500`;

  if (color === "black" || color === "white") {
    colorClass = `bg-${color}`;
  }

  const inputRef = useRef();

  const setCounter = () => {
    const inputValue = inputRef.current.value;
    if (!isNaN(inputValue)) {
      store.dispatch(
        cartActions.setCounter([id, size, parseInt(inputValue, 10)])
      );
    }
  };

  const [imageSrc, setImageSrc] = useState(null);

  useEffect(() => {
    // Use dynamic import to load the image
    import(`../../assets/${image}.png`)
      .then((module) => setImageSrc(module.default))
      .catch((error) => {
        console.error("Error loading image:", error);
      });
  }, [image]);

  const increase = () => {
    store.dispatch(cartActions.incrementCounter([id, size]));
  };

  const decrease = () => {
    store.dispatch(cartActions.decrementCounter([id, size]));
  };

  const deleteItem = () => {
    store.dispatch(cartActions.removeItem([id, size]));
  };

  return (
    <div className="flex gap-5 min-w-[717px]">
      <div className=" w-full border border-neutral-200 overflow-hidden rounded-lg">
        <img className="w-full h-full" src={imageSrc} alt="product" />
      </div>
      <div className="flex justify-between flex-col w-full">
        <div className="space-y-5">
          <h3 className=" text-xl font-bold">{name}</h3>
          <h5 className="font-bold text-neutral-500">{category}</h5>
          <div className="flex gap-5">
            <div className={`w-8 h-8 rounded-full ${colorClass}`}></div>
            <div className="font-bold uppercase w-14 h-8 flex items-center justify-center  rounded-2xl text-xs bg-black text-white">
              {size}
            </div>
          </div>
          <div className="font-medium text-xl">
            {counter} x {price} AZN
            <span className="font-bold">
              | {(counter * price).toFixed(2)} AZN
            </span>
          </div>
        </div>
        <div className="space-y-5">
          <div className="flex items-center gap-4 font-black">
            <button onClick={decrease} className="text-3xl">
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
            <button onClick={increase} className="text-3xl">
              +
            </button>
          </div>
          <button
            onClick={deleteItem}
            className="bg-[#1D1D1D] w-8/12 rounded-lg py-3 px-4 flex items-center justify-between cursor-pointer"
          >
            <span className="uppercase text-white font-extrabold">remove</span>
            <AiFillMinusCircle className=" fill-white w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
