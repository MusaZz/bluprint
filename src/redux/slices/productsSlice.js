import { createSlice } from "@reduxjs/toolkit";

const productsReducer = createSlice({
  name: "color",
  initialState: [
    {
      id: 1,
      price: 13.99,
      name: "Varsity Cap",
      category: "Unisex Caps",
      image: "cap",
      color: "green",
      sizes: [
        {
          name: "xs",
          available: true,
        },
        {
          name: "s",
          available: true,
        },
        {
          name: "m",
          available: true,
        },
        {
          name: "l",
          available: false,
        },
        {
          name: "xl",
          available: true,
        },
      ],
    },
    {
      id: 2,
      price: 24.99,
      name: "T-shirt",
      category: "T-shirts",
      image: "t-shirt",
      color: "black",
      sizes: [
        {
          name: "xs",
          available: true,
        },
        {
          name: "s",
          available: false,
        },
        {
          name: "m",
          available: true,
        },
        {
          name: "l",
          available: false,
        },
        {
          name: "xl",
          available: true,
        },
      ],
    },
    {
      id: 3,
      price: 39.99,
      name: "Jeans",
      category: "Jeans",
      image: "jeans",
      color: "blue",
      sizes: [
        {
          name: "xs",
          available: false,
        },
        {
          name: "s",
          available: true,
        },
        {
          name: "m",
          available: true,
        },
        {
          name: "l",
          available: false,
        },
        {
          name: "xl",
          available: true,
        },
      ],
    },
  ],
  reducers: {},
});

export const productsActions = productsReducer.actions;

export default productsReducer.reducer;
