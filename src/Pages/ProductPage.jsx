// Components
import ProductDetail from "../components/ProductPage/ProductDetail";
import ProductFilter from "../components/ProductPage/ProductFilter";
import ProductImage from "../components/ProductPage/ProductImage";

// React Router
import { useParams } from "react-router-dom";

//Redux
import { useSelector } from "react-redux";

const ProductPage = () => {
  const { id } = useParams();

  const productsData = useSelector((state) => state.products);

  const { name, category, price, image, color, sizes } = productsData.find(
    (p) => p.id === +id
  );

  let colorClass = `bg-${color}-500`;

  if (color === "black" || color === "white") {
    colorClass = `bg-${color}`;
  }

  return (
    <div className=" grid grid-cols-12 gap-10">
      <ProductDetail name={name} category={category} price={price} />
      <ProductImage image={image} />
      <ProductFilter colorClass={colorClass} sizes={sizes} />
    </div>
  );
};

export default ProductPage;
