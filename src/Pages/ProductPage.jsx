// Components
import ProductDetail from "../components/ProductPage/ProductDetail";
import ProductFilter from "../components/ProductPage/ProductFilter";
import ProductImage from "../components/ProductPage/ProductImage";

// React Router
import { useParams } from "react-router-dom";

// Hooks
import { useEffect } from "react";

//Redux
import { useSelector } from "react-redux";
import store from "../redux/store";
import { productActions } from "../redux/slices/productSlice";

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

  const initialProduct = () => {
    store.dispatch(
      productActions.setProduct({
        category: category,
        name: name,
        price: price,
        image: image,
      })
    );
  };

  useEffect(() => {
    initialProduct();
  }, []);

  return (
    <div className=" grid grid-cols-12 gap-10">
      <ProductDetail name={name} category={category} price={price} />
      <ProductImage image={image} />
      <ProductFilter colorClass={colorClass} sizes={sizes} />
    </div>
  );
};

export default ProductPage;
