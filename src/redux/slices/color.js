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
  },
});

export const colorActions = color.actions;

export default color.reducer;
