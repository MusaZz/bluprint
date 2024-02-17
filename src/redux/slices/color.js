import { createSlice } from "@reduxjs/toolkit";

const color = createSlice({
  name: "color",
  initialState: [],
  reducers: {
    addColor: (state, action) => {
      const color = action.payload;

      if (state.includes(color)) {
        const index = state.findIndex((c) => c === color);
        state.splice(index, 1);
      } else {
        state.push(color);
      }
    },
    removeColor: (state, action) => {
      const color = action.payload;

      if (!state.includes(color)) return;

      const index = state.findIndex((c) => c === color);
      state.splice(index, 1);
    },
    clearColors: (state) => {
      state.length = 0;
    },
  },
});

export const { addColor, removeColor, clearColors } = color.actions;

export default color.reducer;
