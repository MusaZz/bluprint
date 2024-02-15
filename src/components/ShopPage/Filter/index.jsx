// Components
import Newsletter from "../../Common/Newsletter";
import Categories from "./Categories";
import Colors from "./Colors";
import Sizes from "./Sizes";

const Filter = () => {
  return (
    <div className="col-span-3 space-y-10">
      <div>
        <Colors />
        <Sizes />
        <Categories />
      </div>
      <Newsletter page="ProductsPage" />
    </div>
  );
};

export default Filter;
