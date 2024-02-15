// Hooks
import { useState } from "react";

// Components
import Category from "./Category";

// Icons
import { BsChevronUp } from "react-icons/bs";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { categoryActions } from "../../../../redux/slices/category";

//Fake Data
const fakeCategories = [
  {
    id: 1,
    name: "Caps",
  },
  {
    id: 2,
    name: "Hoodies",
  },
  {
    id: 3,
    name: "T-shirts",
  },
  {
    id: 4,
    name: "Jeans",
  },
];

// Styles
const styles = {
  btn: "flex justify-between items-center py-4 w-full",
  ul: "text-sm font-medium flex flex-col gap-5 pb-4",
  icon: "duration-200 w-4 h-4",
};

const Categories = () => {
  const [showCategories, setShowCategories] = useState(true);

  const state = useSelector((state) => state.category);

  const dispatch = useDispatch();

  const toggleCategories = () => {
    setShowCategories(!showCategories);
  };

  const setCategory = (category) => {
    dispatch(categoryActions.addCategory(category));
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
          {fakeCategories.map((category) => (
            <Category
              click={() => {
                setCategory(category.name);
              }}
              key={category.id}
              category={category.name}
              selected={state.includes(category.name)}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default Categories;
