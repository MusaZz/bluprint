// Components
import Detail from "./Detail";;
import Filter from "./Filter";
import Image from "./Image";

// React Router
import { useParams } from "react-router-dom";

// Hooks
import { useEffect } from "react";

//Redux
import { useSelector } from "react-redux";
import store from "../../redux/store";
import { productActions } from "../../redux/slices/product";

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
        color: color,
        id: id,
      })
    );
  };

  useEffect(() => {
    store.dispatch(productActions.selectSize(null));
    store.dispatch(productActions.setCounter(1));
  }, [id]);

  useEffect(() => {
    initialProduct();
  }, []);

  return (
    <div className=" grid grid-cols-12 gap-10">
      <Detail name={name} category={category} price={price} />
      <Image image={image} />
      <Filter colorClass={colorClass} sizes={sizes} />
    </div>
  );
};

export default ProductPage;
