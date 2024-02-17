// Components
import { useEffect, useState } from "react";
import Product from "./Product";

// Redux
import { useSelector } from "react-redux";
import Navigation from "./Navigation";

const Products = () => {
  const productsData = useSelector((state) => state.products);

  // console.log(productsData);
  const color = useSelector((state) => state.color);

  const size = useSelector((state) => state.size);
  const category = useSelector((state) => state.category);

  const filters = [];

  filters.push(...color, ...size, ...category);

  const getFakeApiData = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setFakeData(json));
  };

  useEffect(() => {
    getFakeApiData();
  });

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 9;

  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;

  const currentProducts = productsData.slice(startIndex, endIndex);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div className=" col-span-9 h-full space-y-5 pb-5">
      <div className="flex items-center gap-6 w-full h-fit">
        <h3 className="font-medium min-w-fit">Showing 2 results</h3>
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
        {currentProducts.map((product) => (
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
      {productsData.length > productsPerPage && (
        <Navigation
          currentPage={currentPage}
          totalPages={Math.ceil(productsData.length / productsPerPage)}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  );
};

export default Products;
