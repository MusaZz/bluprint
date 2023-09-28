import { createSlice } from "@reduxjs/toolkit";

const cartReducer = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const newCartItem = action.payload;

      console.log(newCartItem);

      const existingCartItem = state.find(
        (item) =>
          item.name === newCartItem.name && item.size === newCartItem.size
      );

      if (existingCartItem) {
        // Item with the same name and size exists, update it
        existingCartItem.counter += newCartItem.counter;
        existingCartItem.totalPrice += newCartItem.counter * newCartItem.price;
      } else {
        // Item does not exist, add it to the cart
        state.push({
          ...newCartItem,
          totalPrice: newCartItem.counter * newCartItem.price,
        });
      }
    },
  },
});

export const cartActions = cartReducer.actions;

export default cartReducer.reducer;
