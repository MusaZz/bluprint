// Icon
import { FaXmark } from "react-icons/fa6";

// Redux
import store from "../../../../../redux/store";
import { clearFilters } from "../../../../../redux/slices/filters";
import { clearCategories } from "../../../../../redux/slices/category";
import { clearColors } from "../../../../../redux/slices/color";
import { clearSizes } from "../../../../../redux/slices/size";

const ClearButton = ({ filters }) => {
  const clearAllFilters = () => {
    store.dispatch(clearFilters());
    store.dispatch(clearCategories());
    store.dispatch(clearColors());
    store.dispatch(clearSizes());
  };
  return (
    <>
      {filters.length > 0 && (
        <button
          onClick={clearAllFilters}
          className=" min-w-[65px] flex items-center gap-0.5"
        >
          <FaXmark className=" text-[#1d1d1d]" />
          <span className="text-[#1d1d1d] font-inter font-semibold text-xs leading-5">
            Clear All
          </span>
        </button>
      )}
    </>
  );
};

export default ClearButton;
