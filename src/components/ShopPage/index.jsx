//Components
import Filter from "./Filter";
import Products from "./Products";

const ShopPage = () => {
  return (
    <div className="grid grid-cols-12 gap-20">
      <Filter />
      <Products />
    </div>
  );
};

export default ShopPage;
