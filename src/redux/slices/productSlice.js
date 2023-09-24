import { createSlice } from "@reduxjs/toolkit";

const productReducer = createSlice({
  name: "product",
  initialState: {
    name: null,
    category: null,
    price: null,
    counter: 1,
    image: null,
    color: null,
    size: null,
  },
  reducers: {
    selectSize: (state, action) => {
      const selectedSize = action.payload;

      if (state.size === selectedSize) {
        state.size = null;
      } else {
        state.size = selectedSize;
      }
    },
    increase: (state) => {
      state.counter++;
    },
    decrease: (state) => {
      state.counter > 1 ? state.counter-- : null;
    },
    setCounter: (state, action) => {
      state.counter = action.payload;
    },
  },
});

export const productActions = productReducer.actions;

export default productReducer.reducer;
