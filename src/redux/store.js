import { configureStore } from "@reduxjs/toolkit";

//Slices
import userSlice from "./slices/userSlice";
import categorySlice from "./slices/categorySlice";
import colorSlice from "./slices/colorSlice";
import sizeSlice from "./slices/sizeSlice";
import productsSlice from "./slices/productsSlice";
import productSlice from "./slices/productSlice";
import cartSlice from "./slices/cartSlice";
import inputSlice from "./slices/inputSlice";

const store = configureStore({
  reducer: {
    user: userSlice,
    category: categorySlice,
    color: colorSlice,
    size: sizeSlice,
    products: productsSlice,
    product: productSlice,
    cart: cartSlice,
    input: inputSlice
  },
});

export default store;
