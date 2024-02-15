//Components
import Filter from "../../components/ProductsPage/Filter";
import Products from "../../components/ProductsPage/Products";

const Shop = () => {
  return (
    <div className="grid grid-cols-12 gap-20">
      <Filter />
      <Products />
    </div>
  );
};

export default Shop;
