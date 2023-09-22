// Hooks
import { useState } from "react";

// Components
import Category from "./Category";

//Icons
import { BsChevronUp } from "react-icons/bs";

// Styles
const styles = {
  btn: "flex justify-between items-center py-4 w-full",
  ul: "text-sm font-medium flex flex-col gap-5 pb-4",
  icon: "duration-200 w-4 h-4",
};

const Categories = () => {
  const [showCategories, setShowCategories] = useState(false);

  const toggleCategories = () => {
    setShowCategories(!showCategories);
  };

  return (
    <div className="border-b">
      <button onClick={toggleCategories} className={styles.btn}>
        <span className="font-bold">Category</span>
        <div>
          <BsChevronUp
            className={`${styles.icon} ${!showCategories && "rotate-180"}`}
            color="black"
          />
        </div>
      </button>
      {showCategories && (
        <ul className={styles.ul}>
          <Category category="Caps" />
          <Category category="Hoodies" />
          <Category category="T-shirts" />
          <Category category="Jeans" />
        </ul>
      )}
    </div>
  );
};

export default Categories;
