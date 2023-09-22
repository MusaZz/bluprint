//Icons
import { BsChevronUp } from "react-icons/bs";

// Components
import Size from "./Size";

//Hooks
import { useState } from "react";

// Styles
const styles = {
  btn: "flex justify-between items-center py-4 w-full",
  icon: "duration-100 w-4 h-4",
  ul: "flex flex-wrap gap-1 pb-4",
};

const Colors = () => {
  const [showSize, setShowSize] = useState(false);

  const toggleSize = () => {
    setShowSize(!showSize);
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
          <Size title="Extra Small" size="xs" />
          <Size title="Small" size="s" />
          <Size title="Medium" size="m" />
          <Size title="Large" size="l" />
          <Size title="Extra Large" size="xl" />
        </ul>
      )}
    </div>
  );
};

export default Colors;
