import { createSlice } from "@reduxjs/toolkit";

const products = createSlice({
  name: "products",
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
    {
      id: 13,
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
      id: 14,
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
      id: 15,
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
      id: 16,
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
      id: 17,
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
      id: 18,
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
      id: 19,
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
      id: 20,
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
      id: 21,
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
      id: 22,
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
      id: 23,
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
      id: 24,
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
      id: 25,
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
      id: 26,
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
      id: 27,
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
      id: 28,
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
      id: 29,
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
      id: 30,
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
      id: 31,
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
      id: 32,
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
      id: 33,
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
      id: 34,
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
      id: 35,
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
      id: 36,
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
      id: 37,
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
      id: 38,
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
      id: 39,
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
      id: 40,
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
      id: 41,
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
      id: 42,
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
      id: 43,
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
      id: 44,
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
      id: 45,
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
      id: 46,
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
      id: 47,
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
      id: 48,
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
      id: 49,
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
      id: 50,
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
      id: 51,
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
      id: 52,
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
      id: 53,
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
      id: 54,
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
      id: 55,
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
      id: 56,
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
      id: 57,
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
      id: 58,
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
      id: 59,
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
      id: 60,
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
      id: 61,
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
      id: 62,
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
      id: 63,
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
      id: 64,
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
      id: 65,
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
      id: 66,
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
      id: 67,
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
      id: 68,
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
      id: 69,
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
      id: 70,
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
      id: 71,
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
      id: 72,
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
