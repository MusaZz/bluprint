import ClearButton from "./ClearButton";
import FilterButton from "./FilterButton";

// Redux
import { useSelector } from "react-redux";
import store from "../../../../redux/store";
import { deleteItem } from "../../../../redux/slices/filters";
import { removeCategory } from "../../../../redux/slices/category";
import { removeColor } from "../../../../redux/slices/color";
import { removeSize } from "../../../../redux/slices/size";

const FilterButtons = () => {
  const filters = useSelector((state) => state.filters);

  const deleteFilterItem = (item) => {
    store.dispatch(deleteItem(item));
    store.dispatch(removeCategory(item));
    store.dispatch(removeColor(item));
    store.dispatch(removeSize(item));
  };

  return (
    <ul className=" flex items-center gap-2 flex-wrap">
      {filters.map((filter) => (
        <FilterButton
          click={() => {
            deleteFilterItem(filter);
          }}
          key={filter}
          filter={filter}
        />
      ))}
      <ClearButton filters={filters} />
    </ul>
  );
};

export default FilterButtons;
