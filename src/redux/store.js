import { configureStore } from "@reduxjs/toolkit";

//Slices
import userSlice from "./slices/userSlice";
import categorySlice from "./slices/categorySlice";
import colorSlice from "./slices/colorSlice";
import sizeSlice from "./slices/sizeSlice";

const store = configureStore({
  reducer: {
    user: userSlice,
    category: categorySlice,
    color: colorSlice,
    size: sizeSlice,
  },
});

export default store;
