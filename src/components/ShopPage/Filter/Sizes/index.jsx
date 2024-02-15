//Icons
import { BsChevronUp } from "react-icons/bs";

// Components
import Size from "./Size";

//Hooks
import { useState } from "react";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { sizeActions } from "../../../../redux/slices/size";

// Fake Data

const fakeSizes = [
  {
    id: 1,
    name: "Extra Small",
    size: "xs",
  },
  {
    id: 2,
    name: "Small",
    size: "s",
  },
  {
    id: 3,
    name: "Medium",
    size: "m",
  },
  {
    id: 4,
    name: "Large",
    size: "l",
  },
  {
    id: 5,
    name: "Extra Large",
    size: "xl",
  },
];

// Styles
const styles = {
  btn: "flex justify-between items-center py-4 w-full",
  icon: "duration-100 w-4 h-4",
  ul: "flex flex-wrap gap-1 pb-4",
};

const Colors = () => {
  const [showSize, setShowSize] = useState(true);

  const state = useSelector((state) => state.size);

  const dispatch = useDispatch();

  const toggleSize = () => {
    setShowSize(!showSize);
  };

  const setSize = (size) => {
    dispatch(sizeActions.addSize(size));
  };

  return (
    <div className="border-b">
      <button onClick={toggleSize} className={styles.btn}>
        <span className="font-bold">Size</span>
        <div>
          <BsChevronUp
            className={`${styles.icon} ${!showSize && "rotate-180"}`}
            color="black"
          />
        </div>
      </button>
      {showSize && (
        <ul className={styles.ul}>
          {fakeSizes.map((size) => (
            <Size
              click={() => {
                setSize(size.name);
              }}
              key={size.id}
              title={size.name}
              size={size.size}
              selected={state.includes(size.name)}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default Colors;
