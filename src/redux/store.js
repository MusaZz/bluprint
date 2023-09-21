import { configureStore } from "@reduxjs/toolkit";

//Slices
import userReducer from "./slices/userSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default store;
