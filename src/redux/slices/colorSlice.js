import { createSlice } from "@reduxjs/toolkit";

const colorReducer = createSlice({
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

export const colorActions = colorReducer.actions;

export default colorReducer.reducer;
