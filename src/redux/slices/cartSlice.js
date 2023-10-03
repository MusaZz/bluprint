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
        state.push(newCartItem);
      }
    },
    incrementCounter: (state, action) => {
      console.log(action.payload);
      const [id, size] = action.payload;
      const selectedItem = state.find(
        (item) => item.id === id && item.size === size
      );
      selectedItem.counter++;
    },
    decrementCounter: (state, action) => {
      const [id, size] = action.payload;
      const selectedItem = state.find(
        (item) => item.id === id && item.size === size
      );

      if (selectedItem) {
        if (selectedItem.counter > 1) {
          selectedItem.counter--;
        } else {
          const selectedItemIndex = state.findIndex(
            (item) => item.id === id && item.size === size
          );
          state.splice(selectedItemIndex, 1);
        }
      }
    },
    setCounter: (state, action) => {
      const [id, size, inputValue] = action.payload;
      const selectedItem = state.find(
        (item) => item.id === id && item.size === size
      );
      selectedItem.counter = inputValue;
    },
  },
});

export const cartActions = cartReducer.actions;

export default cartReducer.reducer;
