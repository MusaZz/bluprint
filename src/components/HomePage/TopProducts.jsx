// Redux Hooks
import { useSelector } from "react-redux";

// Components
import Product from "../../components/ProductsPage/Product";
import Button from "./Button";
import SectionTitle from "../Common/SectionTitle";

const TopProducts = () => {
  const productsData = useSelector((state) => state.products);

  return (
    <section className="space-y-10 gap-0.5 flex flex-col">
      <SectionTitle title="Top Products" />
      <div className="grid grid-cols-12 gap-5">
        {productsData.map((product) => (
          <Product
            page="home"
            key={product.id}
            id={product.id}
            image={product.image}
            alt={product.image}
            price={product.price}
            title={product.name}
            category={product.category}
          />
        ))}
      </div>
      <Button title="See All Products" />
    </section>
  );
};

export default TopProducts;
