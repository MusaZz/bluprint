import { configureStore } from "@reduxjs/toolkit";

//Slices
import user from "./slices/user";
import category from "./slices/category";
import color from "./slices/color";
import size from "./slices/size";
import products from "./slices/products";
import product from "./slices/product";
import cart from "./slices/cart";
import input from "./slices/input";

const store = configureStore({
  reducer: {
    user,
    category,
    color,
    size,
    products,
    product,
    cart,
    input,
  },
});

export default store;
