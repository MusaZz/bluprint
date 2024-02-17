//Icons
import { BsChevronUp } from "react-icons/bs";

// Components
import Color from "./Color";

// Hooks
import { useState } from "react";

// Redux
import { useSelector } from "react-redux";
import store from "../../../../redux/store";
import { addColor } from "../../../../redux/slices/color";
import { showColor } from "../../../../redux/slices/filters";

// Fake Data
const fakeColors = [
  {
    id: 1,
    name: "Black",
    color: "bg-black",
  },
  {
    id: 2,
    name: "White",
    color: "bg-white",
  },
  {
    id: 3,
    name: "Red",
    color: "bg-red-500",
  },
  {
    id: 4,
    name: "Blue",
    color: "bg-blue-500",
  },
  {
    id: 5,
    name: "Green",
    color: "bg-green-500",
  },
];

// Styles
const styles = {
  btn: "flex justify-between items-center py-4 w-full",
  icon: "duration-100 w-4 h-4",
  ul: "flex flex-wrap gap-2 pb-4",
};

const Colors = () => {
  const [showColors, setShowColors] = useState(true);

  const state = useSelector((state) => state.color);

  const toggleColor = () => {
    setShowColors(!showColors);
  };

  const setColor = (color) => {
    store.dispatch(addColor(color));
    store.dispatch(showColor(color));
  };

  return (
    <div className="border-b">
      <button onClick={toggleColor} className={styles.btn}>
        <span className="font-bold">Color</span>
        <div>
          <BsChevronUp
            className={`${styles.icon} ${!showColors && "rotate-180"}`}
            color="black"
          />
        </div>
      </button>
      {showColors && (
        <ul className={styles.ul}>
          {fakeColors.map((color) => (
            <Color
              key={color.id}
              click={() => {
                setColor(color.name);
              }}
              color={color.color}
              title={color.name}
              selected={state.includes(color.name)}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default Colors;
