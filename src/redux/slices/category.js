import { createSlice } from "@reduxjs/toolkit";

const category = createSlice({
  name: "category",
  initialState: [],
  reducers: {
    addCategory: (state, action) => {
      const category = action.payload;

      if (state.includes(category)) {
        const index = state.findIndex((c) => c === category);
        state.splice(index, 1);
      } else {
        state.push(category);
      }
    },
    removeCategory: (state, action) => {
      const category = action.payload;

      if (!state.includes(category)) return;

      const index = state.findIndex((c) => c === category);
      state.splice(index, 1);
    },
    clearCategories: (state) => {
      state.length = 0;
    },
  },
});

export const { addCategory, removeCategory, clearCategories } =
  category.actions;

export default category.reducer;
