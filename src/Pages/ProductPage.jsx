// Components
import ProductDetail from "../components/ProductPage/ProductDetail";
import ProductFilter from "../components/ProductPage/ProductFilter";
import ProductImage from "../components/ProductPage/ProductImage";

const ProductPage = () => {
  return (
    <div className=" grid grid-cols-12 gap-10">
      <ProductDetail />
      <ProductImage />
      <ProductFilter />
    </div>
  );
};

export default ProductPage;
