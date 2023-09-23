// Components
import Product from "./Product";

// Redux
import { useSelector } from "react-redux/es/hooks/useSelector";

const Products = () => {
  const productsData = useSelector((state) => state.products);

  return (
    <div className=" col-span-9 h-full">
      {/* <h3 className='w-full h-fit font-medium'>Showing 2 results</h3> */}
      <div className="grid grid-cols-12 gap-10">
        {productsData.map((product) => (
          <Product
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
    </div>
  );
};

export default Products;
