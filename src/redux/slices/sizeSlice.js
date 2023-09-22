import { createSlice } from "@reduxjs/toolkit";

const sizeReducer = createSlice({
  name: "size",
  initialState: [],
  reducers: {
    addSize: (state, action) => {
      const size = action.payload;

      if (state.includes(size)) {
        const index = state.findIndex((s) => s === size);
        state.splice(index, 1);
      } else {
        state.push(size);
      }
    },
  },
});

export const sizeActions = sizeReducer.actions;

export default sizeReducer.reducer;
