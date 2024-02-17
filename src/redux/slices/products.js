import { createSlice } from "@reduxjs/toolkit";

const products = createSlice({
  name: "color",
  initialState: [
    {
      id: 1,
      price: 13.99,
      name: "Varsity Cap",
      category: "Caps",
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
    {
      id: 4,
      price: 29.99,
      name: "T-Shirt",
      category: "T-Shirt",
      image: "t-shirt-2",
      color: "black",
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
          available: false,
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
      id: 5,
      price: 13.99,
      name: "Varsity Cap",
      category: "Caps",
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
      id: 6,
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
      id: 7,
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
    {
      id: 8,
      price: 29.99,
      name: "T-Shirt",
      category: "T-Shirt",
      image: "t-shirt-2",
      color: "black",
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
          available: false,
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
      id: 9,
      price: 13.99,
      name: "Varsity Cap",
      category: "Caps",
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
      id: 10,
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
      id: 11,
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
    {
      id: 12,
      price: 29.99,
      name: "T-Shirt",
      category: "T-Shirt",
      image: "t-shirt-2",
      color: "black",
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
          available: false,
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

export const productsActions = products.actions;

export default products.reducer;
