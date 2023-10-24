// Components
import Product from "./Product";

// Redux
import { useSelector } from "react-redux/es/hooks/useSelector";

const Products = () => {
  const productsData = useSelector((state) => state.products);

  // console.log(productsData);
  const color = useSelector((state) => state.color);

  const size = useSelector((state) => state.size);
  const category = useSelector((state) => state.category);

  console.log(category);

  // const sizeMapping = {
  //   "Extra Small": "xs",
  //   Small: "s",
  //   Medium: "m",
  //   Large: "l",
  //   "Extra Large": "xl",
  // };

  // const newSizes = [...(size.map((s) => sizeMapping[s]) || null)];

  const filters = [];

  filters.push(...color, ...size, ...category);
  
  return (
    <div className=" col-span-9 h-full space-y-5">
      <div className="flex items-center gap-6 w-full h-fit">
        <h3 className="font-medium min-w-fit">Showind 2 results</h3>
        <ul className="flex items-center gap-2 flex-wrap">
          {filters.map((filter) => (
            <li key={filter}>
              <button className="flex gap-1 bg-[#1d1d1d] px-3 py-1 rounded-md text-sm text-white">
                <span className="">{filter}</span>
                <span className="text-white">x</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="grid grid-cols-12 gap-10">
        {productsData.map((product) => (
          <Product
            key={product.id}
            id={product.id}
            image={product.image}
            alt={product.image}
            price={product.price}
            title={product.name}
            color={product.color}
            category={product.category}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
