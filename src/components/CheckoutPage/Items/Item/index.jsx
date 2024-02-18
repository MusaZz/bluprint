// Icon
import { AiFillMinusCircle } from "react-icons/ai";

// Hooks
import { useState, useEffect, useRef } from "react";

// Redux
import { cartActions } from "../../../../redux/slices/cart";
import store from "../../../../redux/store";

// Hot toast
import toast from "react-hot-toast";

const Item = ({ name, category, image, price, size, color, counter, id }) => {
  let colorClass = `bg-${color}-500`;

  if (color === "black" || color === "white") {
    colorClass = `bg-${color}`;
  }

  const [imageSrc, setImageSrc] = useState(null);

  useEffect(() => {
    // Use dynamic import to load the image
    import(`../../../../assets/${image}.png`)
      .then((module) => setImageSrc(module.default))
      .catch((error) => {
        console.error("Error loading image:", error);
      });
  }, [image]);

  return (
    <div className="flex w-full h-full gap-5 min-w-[717px]">
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
            {counter} x {price} AZN{" "}
            <span className="font-bold">
              | {(counter * price).toFixed(2)} AZN
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
