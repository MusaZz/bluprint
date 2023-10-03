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
    id: null,
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
    setProduct: (state, action) => {
      const { category, name, price, image, color, id } = action.payload;

      state.name = name;
      state.price = price;
      state.image = image;
      state.category = category;
      state.color = color;
      state.id = id + state.size;
    },
  },
});

export const productActions = productReducer.actions;

export default productReducer.reducer;
