import { createSlice } from "@reduxjs/toolkit";

const filters = createSlice({
  name: "filters",
  initialState: [],
  reducers: {
    showCategory: (state, action) => {
      const category = action.payload;

      if (state.includes(category)) {
        const index = state.findIndex((c) => c === category);
        state.splice(index, 1);
      } else {
        state.push(category);
      }
    },
    showColor: (state, action) => {
      const color = action.payload;

      if (state.includes(color)) {
        const index = state.findIndex((c) => c === color);
        state.splice(index, 1);
      } else {
        state.push(color);
      }
    },
    showSize: (state, action) => {
      const size = action.payload;

      if (state.includes(size)) {
        const index = state.findIndex((s) => s === size);
        state.splice(index, 1);
      } else {
        state.push(size);
      }
    },
    showStyle: (state, action) => {
      const style = action.payload;

      if (state.includes(style)) {
        const index = state.findIndex((s) => s === style);
        state.splice(index, 1);
      } else {
        state.push(style);
      }
    },
    deleteItem: (state, action) => {
      const item = action.payload;
      const index = state.findIndex((i) => i === item);
      state.splice(index, 1);
    },
    clearFilters: (state) => {
      state.length = 0;
    },
  },
});

export const {
  showCategory,
  showColor,
  showSize,
  showStyle,
  deleteItem,
  clearFilters,
} = filters.actions;

export default filters.reducer;
