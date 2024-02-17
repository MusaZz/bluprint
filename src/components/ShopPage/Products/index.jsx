// Components
import { useEffect, useState } from "react";
import Product from "./Product";

// Redux
import { useSelector } from "react-redux";
import Navigation from "./Navigation";
import FilterButtons from "./FilterButtons";

const Products = () => {
  const productsData = useSelector((state) => state.products);

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
      <div className="flex items-center gap-6 w-full h-fit flex-wrap">
        <h3 className="font-medium min-w-fit">
          Showing {currentProducts.length} results
        </h3>
        <FilterButtons />
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
