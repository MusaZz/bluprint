import { configureStore } from "@reduxjs/toolkit";

//Slices
import userSlice from "./slices/userSlice";
import categorySlice from "./slices/categorySlice";
import colorSlice from "./slices/colorSlice";
import sizeSlice from "./slices/sizeSlice";
import productsSlice from "./slices/productsSlice";

const store = configureStore({
  reducer: {
    user: userSlice,
    category: categorySlice,
    color: colorSlice,
    size: sizeSlice,
    products: productsSlice,
  },
});

export default store;
